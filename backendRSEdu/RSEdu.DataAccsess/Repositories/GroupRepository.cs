using Microsoft.EntityFrameworkCore;
using RSEdu.DataAccsess.Interfaces;
using RSEdu.DataAccsess.Models;

namespace RSEdu.DataAccsess.Repositories;

public class GroupRepository : IRepository<Group> {
    private readonly RSEduDbContext _context;

    public GroupRepository(RSEduDbContext context) {
        _context = context;
    }

    public async Task<List<Group>> GetAll() {
        return await _context.Set<Group>().ToListAsync();
    }

    public async Task<Group?> GetById(Guid id) {
        return await _context.Set<Group>().FirstOrDefaultAsync(g => g.GroupId == id);
    }

    public async Task<Group> Create(Group group) {
        _context.Set<Group>().Add(group);
        await _context.SaveChangesAsync();

        return group;
    }

    public async Task<Group> Update(Group group) {
        _context.Set<Group>().Update(group);
        await _context.SaveChangesAsync();

        return group;
    }

    public async Task<Group> Delete(Guid id) {
        var group = await _context.Set<Group>().FirstOrDefaultAsync(g => g.GroupId == id);
        if (group == null)
            return group;

        _context.Set<Group>().Remove(group);
        await _context.SaveChangesAsync();
        
        return group;
    }
}
