using BankBranchWebAPI.BAL.IServices;
using BankBranchWebAPI.DAL.IRepository;
using BankBranchWebAPI_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankBranchWebAPI.BAL.Services
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
            return await _bankRepository.GetAllBanksAsync();
        }

        public async Task<Bank> GetBankByIdAsync(int id)
        {
            var bank = await _bankRepository.GetBankByIdAsync(id);
            if (bank == null)
            {
                throw new KeyNotFoundException("Bank not found.");
            }
            return bank;
        }

        public async Task AddBankAsync(Bank bank)
        {
            // Validation: Check if the bank name already exists
            var existingBanks = await _bankRepository.GetAllBanksAsync();
            if (existingBanks.Any(b => b.BankName.Equals(bank.BankName, StringComparison.OrdinalIgnoreCase)))
            {
                throw new ArgumentException("A bank with the same name already exists.");
            }

            await _bankRepository.AddBankAsync(bank);
        }

        public async Task UpdateBankAsync(Bank bank)
        {
            // Validation: Check if the bank exists
            var existingBank = await _bankRepository.GetBankByIdAsync(bank.ID);
            if (existingBank == null)
            {
                throw new KeyNotFoundException("Bank not found.");
            }

            // Validation: Check if the bank name is unique
            var existingBanks = await _bankRepository.GetAllBanksAsync();
            if (existingBanks.Any(b =>
            b.BankName.Equals(bank.BankName, StringComparison.OrdinalIgnoreCase) && b.ID != bank.ID))
            {
                throw new ArgumentException("A bank with the same name already exists.");
            }

            await _bankRepository.UpdateBankAsync(bank);
        }

        public async Task DeleteBankAsync(int id)
        {
            // Validation: Check if the bank exists
            var bank = await _bankRepository.GetBankByIdAsync(id);
            if (bank == null)
            {
                throw new KeyNotFoundException("Bank not found.");
            }

            await _bankRepository.DeleteBankAsync(id);
        }
    }
}
