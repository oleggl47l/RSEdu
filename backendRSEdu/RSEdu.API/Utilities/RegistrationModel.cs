﻿namespace RSEdu.API.Utilities;

public class RegistrationModel {
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public Guid GroupId { get; set; }
}