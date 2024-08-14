using BankWebAPI.DAL.IRepositories;
using BankWebAPI.DAL.Data;
using BankWebAPI.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BankWebAPI.DAL.Repositories
{
    public class BranchRepository : IBranchRepository
    {
        private readonly BankDbContext _context;

        public BranchRepository(BankDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Branch>> GetAllAsync()
        {
            return await _context.Branches.Include(b => b.Bank).ToListAsync();
        }

        public async Task<Branch> GetByIdAsync(int id)
        {
            return await _context.Branches.Include(b => b.Bank).FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task AddAsync(Branch entity)
        {
            await _context.Branches.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Branch entity)
        {
            _context.Branches.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
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

