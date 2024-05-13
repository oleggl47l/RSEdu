using Microsoft.EntityFrameworkCore;
using RSEdu.Application.Security;
using RSEdu.DataAccsess;
using RSEdu.DataAccsess.Models;

namespace RSEdu.Application.Services;

public class TeacherRegistrationService {
    private readonly RSEduDbContext _context;

    public TeacherRegistrationService(RSEduDbContext context) {
        _context = context;
    }

    public async Task<User> RegisterAsync(string firstName, string lastName, string email, string password, Guid groupId) {
        if (await _context.Users.AnyAsync(u => u.Email == email)) {
            throw new ArgumentException("Teacher with this email already exists", nameof(email));
        }
        
        var groupExists = await _context.Groups.AnyAsync(g => g.GroupId == groupId);
        if (!groupExists) {
            throw new ArgumentException("Group with this ID does not exist", nameof(groupId));
        }
        
        var user = new User {
            UserId = Guid.NewGuid(),
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            PasswordHash = PasswordHasher.HashPassword(password),
            GroupId = groupId,
            RoleId = await _context.Roles
                .Where(role => role.Name == "Teacher")
                .Select(role => role.RoleId)
                .FirstOrDefaultAsync()
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return user;
    }
}