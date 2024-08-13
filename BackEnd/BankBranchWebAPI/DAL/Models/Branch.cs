using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BankBranchWebAPI_DAL.Models
{
    [Table("Branch")]
    public class Branch
    {
        [Key]
        public int ID { get; set; }
        [Required(ErrorMessage = "Branch must have name")]
        public string? Branch_Name { get; set; }
        [Required(ErrorMessage = "Adress can't be empty")]
        public string? Address { get; set; }
        [Required(ErrorMessage ="State can't be empty")]
        public string? State { get; set; }
        [Required(ErrorMessage = "MICR can't be empty")]
        public string? MICR_Code { get; set; }
        [Required(ErrorMessage ="IFSC can't be empty")]
        public string? IFSC_Code { get; set; }
        [ForeignKey(nameof(BankName))]
        [Required(ErrorMessage ="It is required to link.")]
        public int Bank_ID { get; set; }
        public Bank BankName { get; set; }
    }
}
