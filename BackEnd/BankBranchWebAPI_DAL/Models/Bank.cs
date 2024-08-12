using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankBranchWebAPI_DAL.Models
{
    [Table("Bank")]
    public class Bank
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage ="Bank must have name")]
        public string? BankName { get; set; }
        public ICollection<Branch>? Branches { get; set; }
    }
}
