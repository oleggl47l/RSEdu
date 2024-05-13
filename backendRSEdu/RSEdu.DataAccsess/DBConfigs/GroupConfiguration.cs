using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RSEdu.DataAccsess.Models;

namespace RSEdu.DataAccsess.DBConfigs;

public class GroupConfiguration : IEntityTypeConfiguration<Group> {
    public void Configure(EntityTypeBuilder<Group> builder) {
        builder.ToTable("Groups");

        builder.HasKey(r => r.GroupId);

        builder.Property(r => r.Name)
            .HasMaxLength(50)
            .IsRequired();
    }
}