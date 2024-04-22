using Microsoft.AspNetCore.Mvc;
using RSEdu.API.Utilities;
using RSEdu.Application.Services;

namespace RSEdu.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RegistrationController(RegistrationService registrationService) : ControllerBase {
    [HttpPost("registration")]
    public async Task<IActionResult> RegisterAsync([FromBody] RegistrationModel registrationModel) {
        var user = await registrationService.RegisterAsync(registrationModel.FirstName, registrationModel.LastName,
            registrationModel.Email, registrationModel.Password);
        return Ok(user);
    }
}