﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RSEdu.Application.Interfaces;
using RSEdu.DataAccsess.Models;

namespace RSEdu.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Policy = "Admin")]

// [Authorize]
public class RoleCRUDController(ICRUDService<Role> icrudService) : ControllerBase {
    [HttpGet]
    public async Task<ActionResult<List<Role>>> GetAllRoles() {
        var books = await icrudService.GetAll();
        return Ok(books);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Role>> GetRoleById(Guid id) {
        var role = await icrudService.GetById(id);
        if (role == null) {
            return BadRequest("Wrong ID");
        }

        return Ok(role);
    }

    [HttpPost]
    public async Task<ActionResult<Role>> CreateRole([FromBody] Role role) {
        var createdRole = await icrudService.Create(role);
        return CreatedAtAction(nameof(GetRoleById), new { id = createdRole.RoleId }, createdRole);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Role>> UpdateRole(Guid id, [FromBody] Role role) {
        // if (id != role.RoleId) {
        //     return BadRequest("Wrong ID");
        // }
        //
        // var updatedRole = await icrudService.Update(role);
        // return Ok(updatedRole);

        var existingRole = await icrudService.GetById(id);
        if (existingRole == null) {
            return BadRequest("Role not found");
        }

        existingRole.Name = role.Name;

        var result = await icrudService.Update(existingRole);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteRole(Guid id) {
        return Ok(await icrudService.Delete(id));
    }
}