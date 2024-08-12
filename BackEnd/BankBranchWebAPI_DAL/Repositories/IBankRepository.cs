﻿using BankBranchWebAPI_DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankBranchWebAPI_DAL.Repositories
{
    public interface IBankRepository
    {
        Task<IEnumerable<Bank>> GetAllBanksAsync();
        Task<Bank> GetBankByIdAsync(int id);
        Task AddBankAsync(Bank bank);
        Task UpdateBankAsync(Bank bank);
        Task DeleteBankAsync(int id);
    }
}
