using Microsoft.EntityFrameworkCore;
using RSEdu.Application.Security;
using RSEdu.DataAccsess;
using RSEdu.DataAccsess.Models;

namespace RSEdu.Application.Services;

public class RegistrationService {
    private readonly RSEduDbContext _context;

    public RegistrationService(RSEduDbContext context) {
        _context = context;
    }

    public async Task<User> RegisterAsync(string firstName, string lastName, string email, string password) {
        if (await _context.Users.AnyAsync(u => u.Email == email)) {
            throw new ArgumentException("User with this email already exists", nameof(email));
        }
        
        var user = new User {
            UserId = Guid.NewGuid(),
            FirstName = firstName,
            LastName = lastName,
            Email = email,
            PasswordHash = PasswordHasher.HashPassword(password),
            // RoleId = new Guid("3fa85f64-5717-4562-b3fc-2c963f66afa6")
            RoleId = await _context.Roles
                .Where(role => role.Name == "User")
                .Select(role => role.RoleId)
                .FirstOrDefaultAsync()
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return user;
    }
}