using  BankWebAPI.BAL.IServices;
using BankWebAPI.DAL.Repositories;
using BankWebAPI.DAL.IRepositories;
using BankWebAPI.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BankWebAPI.BAL.Services
{
    public class BankService : IBankService
    {
        private readonly IBankRepository _bankRepository;

        public BankService(IBankRepository bankRepository)
        {
            _bankRepository = bankRepository;
        }

        public async Task<IEnumerable<Bank>> GetAllBanksAsync()
        {
            return await _bankRepository.GetAllAsync();
        }

        public async Task<Bank> GetBankByIdAsync(int id)
        {
            return await _bankRepository.GetByIdAsync(id);
        }

        public async Task AddBankAsync(Bank bank)
        {
            await _bankRepository.AddAsync(bank);
        }

        public async Task UpdateBankAsync(Bank bank)
        {
            await _bankRepository.UpdateAsync(bank);
        }

        public async Task DeleteBankAsync(int id)
        {
            await _bankRepository.DeleteAsync(id);
        }
    }
}
