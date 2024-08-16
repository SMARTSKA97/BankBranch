namespace BankAPI.DAL.Models.DTO
{
    public class BankWithBranchesDTO
    {
        public string? BankName { get; set; }
        public List<BranchDTO>? Branches { get; set; }
    }
}
