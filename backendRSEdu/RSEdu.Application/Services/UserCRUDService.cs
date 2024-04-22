using RSEdu.Application.Interfaces;
using RSEdu.DataAccsess.Interfaces;
using RSEdu.DataAccsess.Models;

namespace RSEdu.Application.Services;

public class UserCRUDService : ICRUDService<User> {
    private readonly IRepository<User> _repository;

    public UserCRUDService(IRepository<User> repository) {
        _repository = repository;
    }

    public async Task<List<User>> GetAll() {
        return await _repository.GetAll();
    }

    public async Task<User?> GetById(Guid id) {
        return await _repository.GetById(id);
    }

    public async Task<User> Create(User user) {
        return await _repository.Create(user);
    }
    
    public async Task<User> Update(User user) {
        return await _repository.Update(user);
    }
    
    public async Task<User> Delete(Guid id) {
        return await _repository.Delete(id);
    }
}