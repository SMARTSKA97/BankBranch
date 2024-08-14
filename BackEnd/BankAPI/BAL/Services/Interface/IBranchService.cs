using BankAPI.DAL.Models.DTO;

namespace BankAPI.BAL.Services.Interface
{
    public interface IBranchService
    {
        Task<IEnumerable<BranchDTO>> GetAllBranchesAsync();
        Task<BranchDTO> GetBranchByIdAsync(int id);
        Task AddBranchAsync(BranchDTO branchDto);
        Task UpdateBranchAsync(BranchDTO branchDto);
        Task DeleteBranchAsync(int id);
    }
}
