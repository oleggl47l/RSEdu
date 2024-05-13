using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RSEdu.Application.Interfaces;
using RSEdu.DataAccsess.Models;

namespace RSEdu.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Policy = "AdmTeach")]

// [Authorize]
public class GroupCRUDController(ICRUDService<Group> icrudService) : ControllerBase {
    [HttpGet]
    public async Task<ActionResult<List<Group>>> GetAllGroups() {
        var groups = await icrudService.GetAll();
        return Ok(groups);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Group>> GetGroupById(Guid id) {
        var group = await icrudService.GetById(id);
        if (group == null) {
            return BadRequest("Wrong ID");
        }

        return Ok(group);
    }

    [HttpPost]
    public async Task<ActionResult<Group>> CreateGroup([FromBody] Group group) {
        var createdGroup = await icrudService.Create(group);
        return CreatedAtAction(nameof(GetGroupById), new { id = createdGroup.GroupId }, createdGroup);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Group>> UpdateGroup(Guid id, [FromBody] Group group) {
        var existingGroup = await icrudService.GetById(id);
        if (existingGroup == null) {
            return BadRequest("Group not found");
        }

        existingGroup.Name = group.Name;

        var result = await icrudService.Update(existingGroup);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteGroup(Guid id) {
        return Ok(await icrudService.Delete(id));
    }
}