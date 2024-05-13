using Microsoft.AspNetCore.Mvc;
using RSEdu.API.Utilities;
using RSEdu.Application.Services;

namespace RSEdu.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserRegistrationController(UserRegistrationService userRegistrationService) : ControllerBase {
    [HttpPost("userRegistration")]
    public async Task<IActionResult> RegisterAsync([FromBody] RegistrationModel registrationModel) {
        var user = await userRegistrationService.RegisterAsync(registrationModel.FirstName, registrationModel.LastName,
            registrationModel.Email, registrationModel.Password, registrationModel.GroupId);
        return Ok(user);
    }
}