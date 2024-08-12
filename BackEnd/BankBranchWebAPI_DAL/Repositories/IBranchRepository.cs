using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BankBranchWebAPI_DAL.Repositories
{
    public interface IBranchRepository<Branch>
    {
        IQueryable<Branch> FindAll();
        IQueryable<Branch> FindByCondition(Expression<Func<Branch, bool>> expression);
        void Create(Branch entity);
        void Update(Branch entity);
        void Delete(Branch entity);
    }
}
