using BankWebAPI.DAL.IRepositories;
using BankWebAPI.DAL.Data;
using BankWebAPI.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BankWebAPI.DAL.Repositories
{
    public class BankRepository : IBankRepository
    {
        private readonly BankDbContext _context;

        public BankRepository(BankDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Bank>> GetAllAsync()
        {
            return await _context.Banks.ToListAsync();
        }

        public async Task<Bank> GetByIdAsync(int id)
        {
            return await _context.Banks.Include(b => b.Branches).FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task AddAsync(Bank entity)
        {
            await _context.Banks.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Bank entity)
        {
            _context.Banks.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var bank = await _context.Banks.FindAsync(id);
            if (bank != null)
            {
                _context.Banks.Remove(bank);
                await _context.SaveChangesAsync();
            }
        }
    }

}
