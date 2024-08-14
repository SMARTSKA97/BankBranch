using BankAPI.DAL.Models.DTO;

namespace BankAPI.BAL.Services.Interface
{
    public interface IBankService
    {
        Task<IEnumerable<BankDTO>> GetAllBanksAsync();
        Task<BankDTO> GetBankByIdAsync(int id);
        Task AddBankAsync(BankDTO bankDto);
        Task UpdateBankAsync(BankDTO bankDto);
        Task DeleteBankAsync(int id);
    }
}
