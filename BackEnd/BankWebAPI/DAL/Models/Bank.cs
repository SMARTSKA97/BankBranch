using System;
using System.Collections.Generic;

namespace BankWebAPI.DAL.Models;

public partial class Bank
{
    public int ID { get; set; }

    public string BankName { get; set; } = null!;

    public virtual ICollection<Branch> Branches { get; } = new List<Branch>();
}
