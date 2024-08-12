using BankBranchWebAPI_DAL.Models;
using BankBranchWebAPI_DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankBranchWebAPI_BAL.Services
{
    public class BranchService : IBranchService
    {
        private readonly IBranchRepository _branchRepository;
        private readonly IBankRepository _bankRepository;

        public BranchService(IBranchRepository branchRepository, IBankRepository bankRepository)
        {
            _branchRepository = branchRepository;
            _bankRepository = bankRepository;
        }

        public async Task<IEnumerable<Branch>> GetBranchesByBankIdAsync(int bankId)
        {
            return await _branchRepository.GetBranchesByBankIdAsync(bankId);
        }

        public async Task<Branch> GetBranchByIdAsync(int id)
        {
            var branch = await _branchRepository.GetBranchByIdAsync(id);
            if (branch == null)
            {
                throw new KeyNotFoundException($"Branch with ID {id} not found.");
            }
            return branch;
        }

        public async Task AddBranchAsync(Branch branch)
        {
            // Validation: Ensure the bank exists
            var bank = await _bankRepository.GetBankByIdAsync(branch.Bank_ID);
            if (bank == null)
            {
                throw new KeyNotFoundException($"Bank with ID {branch.Bank_ID} not found.");
            }

            // Validation: Ensure unique IFSC code within the bank
            var existingBranches = await _branchRepository.GetBranchesByBankIdAsync(branch.Bank_ID);
            foreach (var existingBranch in existingBranches)
            {
                if (existingBranch.IFSC_Code == branch.IFSC_Code)
                {
                    throw new InvalidOperationException($"A branch with IFSC code {branch.IFSC_Code} already exists for this bank.");
                }
            }

            await _branchRepository.AddBranchAsync(branch);
        }

        public async Task UpdateBranchAsync(Branch branch)
        {
            var existingBranch = await _branchRepository.GetBranchByIdAsync(branch.ID);
            if (existingBranch == null)
            {
                throw new KeyNotFoundException($"Branch with ID {branch.ID} not found.");
            }

            // Validation: Ensure unique IFSC code within the bank (excluding the current branch)
            var existingBranches = await _branchRepository.GetBranchesByBankIdAsync(branch.Bank_ID);
            foreach (var br in existingBranches)
            {
                if (br.ID != branch.ID && br.IFSC_Code == branch.IFSC_Code)
                {
                    throw new InvalidOperationException($"A branch with IFSC code {branch.IFSC_Code} already exists for this bank.");
                }
            }

            await _branchRepository.UpdateBranchAsync(branch);
        }

        public async Task DeleteBranchAsync(int id)
        {
            var branch = await _branchRepository.GetBranchByIdAsync(id);
            if (branch == null)
            {
                throw new KeyNotFoundException($"Branch with ID {id} not found.");
            }

            await _branchRepository.DeleteBranchAsync(id);
        }
    }
}
