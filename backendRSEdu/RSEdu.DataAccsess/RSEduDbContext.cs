using Microsoft.EntityFrameworkCore;
using RSEdu.DataAccsess.DBConfigs;
using RSEdu.DataAccsess.Models;

namespace RSEdu.DataAccsess;

public class RSEduDbContext : DbContext {
    public RSEduDbContext(DbContextOptions<RSEduDbContext> options) : base(options) {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) {
        modelBuilder.ApplyConfiguration(new RoleConfiguration());
        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new GroupConfiguration());
    }


    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<Group> Groups { get; set; }
}