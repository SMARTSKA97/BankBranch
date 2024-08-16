namespace BankAPI.DAL.Models.DTO
{
    public class BranchDTO
    {
        public int Id { get; set; }
        public string BranchName { get; set; } = null!;
        public string Address { get; set; } = null!;
        public string State { get; set; } = null!;
        public int PinCode { get; set; }
        public string MicrCode { get; set; } = null!;
        public string IfscCode { get; set; } = null!;
        public int BankId { get; set; }
    }
}
