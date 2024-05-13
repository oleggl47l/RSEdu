using RSEdu.Application.Interfaces;
using RSEdu.DataAccsess.Interfaces;
using RSEdu.DataAccsess.Models;

namespace RSEdu.Application.Services;

public class GroupCRUDService : ICRUDService<Group> {
    private readonly IRepository<Group> _repository;

    public GroupCRUDService(IRepository<Group> repository) {
        _repository = repository;
    }

    public async Task<List<Group>> GetAll() {
        return await _repository.GetAll();
    }

    public async Task<Group?> GetById(Guid id) {
        return await _repository.GetById(id);
    }

    public async Task<Group> Create(Group group) {
        return await _repository.Create(group);
    }
    
    public async Task<Group> Update(Group group) {
        return await _repository.Update(group);
    }
    
    public async Task<Group> Delete(Guid id) {
        return await _repository.Delete(id);
    }
}