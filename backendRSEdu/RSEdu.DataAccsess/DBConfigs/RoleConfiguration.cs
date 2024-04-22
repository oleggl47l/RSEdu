using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RSEdu.DataAccsess.Models;

namespace RSEdu.DataAccsess.DBConfigs;

public class RoleConfiguration : IEntityTypeConfiguration<Role> {
    public void Configure(EntityTypeBuilder<Role> builder) {
        builder.ToTable("Roles");

        builder.HasKey(r => r.RoleId);

        builder.Property(r => r.Name)
            .HasMaxLength(50)
            .IsRequired();
    }
}