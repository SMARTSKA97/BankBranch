using System;
using System.Collections.Generic;

namespace BankWebAPI.DAL.Models;

public partial class Branch
{
    public int ID { get; set; }

    public string BranchName { get; set; } = null!;

    public string? Address { get; set; }

    public string? State { get; set; }

    public string? MicrCode { get; set; }

    public string? IfscCode { get; set; }

    public int BankId { get; set; }

    public virtual Bank Bank { get; set; } = null!;
}
