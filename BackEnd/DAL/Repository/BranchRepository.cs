using BankAPI.DAL.Data;
using BankAPI.DAL.Models;
using BankAPI.DAL.Repository.Interface;
using Microsoft.CodeAnalysis.Operations;
using Microsoft.EntityFrameworkCore;

namespace BankAPI.DAL.Repository
{
    public class BranchRepository : IBranchRepository
    {
        private readonly BankDbContext _context;

        public BranchRepository(BankDbContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Branch>> GetAllBranchesAsync()
        {
            return await _context.Branches.ToListAsync();
        }

        public async Task<Branch> GetBranchByIdAsync(int id)
        {
            return await _context.Branches.FindAsync(id);
        }
        public async Task<List<Branch>> GetBranchesByBankIdAsync(int bankId)
        {
            return await _context.Branches
                .Where(b => b.BankId == bankId)
                .ToListAsync();
        }

        public async Task AddBranchAsync(Branch branch)
        {
            await _context.Branches.AddAsync(branch);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateBranchAsync(Branch branch)
        {
            _context.Branches.Update(branch);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBranchAsync(int id)
        {
            var branch = await _context.Branches.FindAsync(id);
            if (branch != null)
            {
                _context.Branches.Remove(branch);
                await _context.SaveChangesAsync();
            }
        }
    }
}

