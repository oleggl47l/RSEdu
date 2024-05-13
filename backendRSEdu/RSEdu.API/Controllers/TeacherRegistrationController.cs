using Microsoft.AspNetCore.Mvc;
using RSEdu.API.Utilities;
using RSEdu.Application.Services;

namespace RSEdu.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TeacherRegistrationController(TeacherRegistrationService teacherRegistrationService) : ControllerBase {
    [HttpPost("teacherRegistration")]
    public async Task<IActionResult> RegisterAsync([FromBody] RegistrationModel registrationModel) {
        var teacher = await teacherRegistrationService.RegisterAsync(registrationModel.FirstName, registrationModel.LastName,
            registrationModel.Email, registrationModel.Password, registrationModel.GroupId);
        return Ok(teacher);
    }
}