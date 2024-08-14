using BankWebAPI.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BankWebAPI.BAL.IServices
{
    public interface IBranchService
    {
        Task<IEnumerable<Branch>> GetAllBranchesAsync();
        Task<Branch> GetBranchByIdAsync(int id);
        Task AddBranchAsync(Branch branch);
        Task UpdateBranchAsync(Branch branch);
        Task DeleteBranchAsync(int id);
    }
}
