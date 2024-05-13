namespace RSEdu.DataAccsess.Models;

public class User {
    public Guid UserId { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public Guid GroupId { get; set; }
    public Group? Group { get; set; }
    public Guid RoleId { get; set; }
    public Role? Role { get; set; }
}