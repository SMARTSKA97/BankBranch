using BankWebAPI.BAL.Services;
using BankWebAPI.BAL.IServices;
using BankWebAPI.DAL.IRepositories;
using BankWebAPI.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using BankWebAPI.DAL.Models.DTO;

namespace BankWebAPI.BAL.Services
{
        public class BranchService : IBranchService
        {
            private readonly IBranchRepository _branchRepository;

            public BranchService(IBranchRepository branchRepository)
            {
                _branchRepository = branchRepository;
            }

            public async Task<IEnumerable<Branch>> GetAllBranchesAsync()
            {
                return await _branchRepository.GetAllAsync();
            }

            public async Task<Branch> GetBranchByIdAsync(int id)
            {
                return await _branchRepository.GetByIdAsync(id);
            }

            public async Task AddBranchAsync(Branch branch)
            {
                await _branchRepository.AddAsync(branch);
            }

            public async Task UpdateBranchAsync(Branch branch)
            {
                await _branchRepository.UpdateAsync(branch);
            }

            public async Task DeleteBranchAsync(int id)
            {
                await _branchRepository.DeleteAsync(id);
            }
        }
    }
