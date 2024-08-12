using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BankBranchWebAPI_DAL.Repositories
{
    public interface IBankRepository<Bank>
    {
        IQueryable<Bank> FindAll();
        IQueryable<Bank> FindByCondition(Expression<Func<Bank, bool>> expression);
        void Create(Bank entity);
        void Update(Bank entity);
        void Delete(Bank entity);
    }
}
