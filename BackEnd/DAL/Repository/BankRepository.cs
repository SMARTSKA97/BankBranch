using BankAPI.DAL.Data;
using BankAPI.DAL.Models;
using BankAPI.DAL.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace BankAPI.DAL.Repository
{
        public class BankRepository : IBankRepository
        {
            private readonly BankDbContext _context;

            public BankRepository(BankDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Bank>> GetAllBanksAsync()
            {
                return await _context.Banks.ToListAsync();
            }

            public async Task<Bank> GetBankByIdAsync(int id)
            {
                return await _context.Banks.FindAsync(id);
            }

            public async Task AddBankAsync(Bank bank)
            {
                await _context.Banks.AddAsync(bank);
                await _context.SaveChangesAsync();
            }

            public async Task UpdateBankAsync(Bank bank)
            {
                _context.Banks.Update(bank);
                await _context.SaveChangesAsync();
            }

            public async Task DeleteBankAsync(int id)
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
