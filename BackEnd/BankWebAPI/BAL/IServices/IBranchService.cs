﻿using BankWebAPI.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankWebAPI.BAL.IServices
{
    public interface IBranchService
    {
        Task<IEnumerable<Branch>> GetBranchesByBankIdAsync(int bankId);
        Task<Branch> GetBranchByIdAsync(int id);
        Task AddBranchAsync(Branch branch);
        Task UpdateBranchAsync(Branch branch);
        Task DeleteBranchAsync(int id);
    }
}
