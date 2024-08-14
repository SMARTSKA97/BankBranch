using BankWebAPI.BAL.IServices;
using BankWebAPI.DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BankWebAPI.PL.Controllers
{
    //[Route("api/[controller]")]
    [Route("api/banks/{bankId}/[controller]")]
    [ApiController]
    public class BranchController : ControllerBase
    {
        private readonly IBranchService _branchService;

        public BranchController(IBranchService branchService)
        {
            _branchService = branchService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Branch>>> GetBranchesByBankId(int bankId)
        {
            var branches = await _branchService.GetBranchesByBankIdAsync(bankId);
            return Ok(new { Status = "Success", Data = branches });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Branch>> GetBranchById(int bankId, int id)
        {
            try
            {
                var branch = await _branchService.GetBranchByIdAsync(id);
                if (branch.BankId != bankId)
                {
                    return BadRequest(new { Status = "Error", Message = "Branch does not belong to the specified bank." });
                }
                return Ok(new { Status = "Success", Data = branch });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Status = "Error", ex.Message });
            }
        }

        [HttpPost]
        public async Task<ActionResult> AddBranch(int bankId, [FromBody] Branch branch)
        {
            branch.BankId = bankId;

            try
            {
                await _branchService.AddBranchAsync(branch);
                return CreatedAtAction(nameof(GetBranchById), new { bankId = branch.BankId, id = branch.ID }, new { Status = "Success", Data = branch });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Status = "Error", ex.Message });
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateBranch(int bankId, int id, [FromBody] Branch branch)
        {
            if (id != branch.ID || bankId != branch.BankId)
            {
                return BadRequest(new { Status = "Error", Message = "ID or BankID mismatch." });
            }

            try
            {
                await _branchService.UpdateBranchAsync(branch);
                return Ok(new { Status = "Success", Data = branch });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Status = "Error", ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Status = "Error", ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBranch(int bankId, int id)
        {
            try
            {
                var branch = await _branchService.GetBranchByIdAsync(id);
                if (branch.BankId != bankId)
                {
                    return BadRequest(new { Status = "Error", Message = "Branch does not belong to the specified bank." });
                }

                await _branchService.DeleteBranchAsync(id);
                return Ok(new { Status = "Success", Message = "Branch deleted successfully." });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Status = "Error", ex.Message });
            }
        }
    }
}
