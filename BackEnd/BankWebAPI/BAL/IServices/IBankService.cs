using BankWebAPI.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using BankWebAPI.DAL.Repositories;

namespace BankWebAPI.BAL.IServices

{
    public interface IBankService
    {
        Task<IEnumerable<Bank>> GetAllBanksAsync();
        Task<Bank> GetBankByIdAsync(int id);
        Task AddBankAsync(Bank bank);
        Task UpdateBankAsync(Bank bank);
        Task DeleteBankAsync(int id);
    }
}
