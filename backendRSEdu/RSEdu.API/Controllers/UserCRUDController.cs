using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RSEdu.Application.Interfaces;
using RSEdu.Application.Security;
using RSEdu.DataAccsess.Models;

namespace RSEdu.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]

// [Authorize(Policy = "Admin")]

public class UserCRUDController(ICRUDService<User> icrudService) : ControllerBase {
    
    [Authorize(Policy = "Admin")]
    [HttpGet]
    public async Task<ActionResult<List<User>>> GetAllUsers() {
        var User = await icrudService.GetAll();
        return Ok(User);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUserById(Guid id) {
        var user = await icrudService.GetById(id);
        if (user == null) {
            return BadRequest("Wrong ID");
        }

        return Ok(user);
    }

    [HttpPost]
    public async Task<ActionResult<User>> CreateUser([FromBody] User user) {
        var createdUser = await icrudService.Create(user);
        return CreatedAtAction(nameof(GetUserById), new { id = createdUser.UserId }, createdUser);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<User>> UpdateUser(Guid id, [FromBody] User user) {
        // if (id != user.UserId) {
        //     return BadRequest("Wrong ID");
        // }

        // var updatedUser = await icrudService.Update(user);
        // return Ok(updatedUser);

        var existingUser = await icrudService.GetById(id);
        if (existingUser == null) {
            return BadRequest("User not found");
        }

        existingUser.FirstName = user.FirstName;
        existingUser.LastName = user.LastName;
        existingUser.Email = user.Email;
        // existingUser.PasswordHash = PasswordHasher.HashPassword(user.PasswordHash);
        existingUser.RoleId = user.RoleId;
        existingUser.GroupId = user.GroupId;

        var result = await icrudService.Update(existingUser);
        return Ok(result);
    }

    [Authorize(Policy = "Admin")]
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteUser(Guid id) {
        return Ok(await icrudService.Delete(id));
    }
}