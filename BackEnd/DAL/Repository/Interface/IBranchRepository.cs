using BankAPI.DAL.Models;

namespace BankAPI.DAL.Repository.Interface
{
    public interface IBranchRepository
    {
        Task<IEnumerable<Branch>> GetAllBranchesAsync();
        Task<Branch> GetBranchByIdAsync(int id);
        Task<List<Branch>> GetBranchesByBankIdAsync(int bankId);

        Task AddBranchAsync(Branch branch);
        Task UpdateBranchAsync(Branch branch);
        Task DeleteBranchAsync(int id);
    }
}
