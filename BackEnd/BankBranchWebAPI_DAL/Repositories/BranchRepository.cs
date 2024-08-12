using BankBranchWebAPI_DAL.Data;
using BankBranchWebAPI_DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankBranchWebAPI_DAL.Repositories
{
    public class BranchRepository : IBranchRepository
    {
        private readonly ApplicationDbContext _context;

        public BranchRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Branch>> GetBranchesByBankIdAsync(int bankId)
        {
            return await _context.Branches.Where(br => br.Bank_ID == bankId).ToListAsync();
        }

        public async Task<Branch> GetBranchByIdAsync(int id)
        {
            return await _context.Branches.Include(br => br.Bank).FirstOrDefaultAsync(br => br.ID == id);
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
