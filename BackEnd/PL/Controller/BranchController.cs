using BankAPI.BAL.Services.Interface;
using BankAPI.DAL.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace BankAPI.PL.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class BranchController : ControllerBase
    {
        private readonly IBranchService _branchService;

        public BranchController(IBranchService branchService)
        {
            _branchService = branchService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BranchDTO>>> GetAllBranches()
        {
            var branches = await _branchService.GetAllBranchesAsync();
            return Ok(branches);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BranchDTO>> GetBranchById(int id)
        {
            var branch = await _branchService.GetBranchByIdAsync(id);
            if (branch == null)
            {
                return NotFound();
            }
            return Ok(branch);
        }

        [HttpGet("GetBranchesByBank/{bankId}")]
        public async Task<ActionResult<BankWithBranchesDTO>> GetBranchesByBank(int bankId)
        {
            var bankWithBranches = await _branchService.GetBranchesByBankAsync(bankId);
            if (bankWithBranches == null)
            {
                return NotFound();
            }
            return Ok(bankWithBranches);
        }

        // GET: api/Branch/ByBank/{bankId}
        [HttpGet("ByBank/{bankId}")]
        public async Task<ActionResult<IEnumerable<BranchDTO>>> GetBranchesByBankId(int bankId)
        {
            var branches = await _branchService.GetBranchesByBankIdAsync(bankId);

            //if (branches == null || branches.Count == 0)
            //{
            //    return NotFound();
            //}

            return Ok(branches);
        }

        [HttpPost]
        public async Task<ActionResult> AddBranch(BranchDTO branchDto)
        {
            await _branchService.AddBranchAsync(branchDto);
            return CreatedAtAction(nameof(GetBranchById), new { id = branchDto.Id }, branchDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateBranch(int id, BranchDTO branchDto)
        {
            if (id != branchDto.Id)
            {
                return BadRequest();
            }

            await _branchService.UpdateBranchAsync(branchDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBranch(int id)
        {
            var branch = await _branchService.GetBranchByIdAsync(id);
            if (branch == null)
            {
                return NotFound();
            }

            await _branchService.DeleteBranchAsync(id);
            return NoContent();
        }
    }
}
