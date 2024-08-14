using BankWebAPI.BAL.IServices;
using BankWebAPI.DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BankWebAPI.PL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankController : ControllerBase
    {
        private readonly IBankService _bankService;

        public BankController(IBankService bankService)
        {
            _bankService = bankService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bank>>> GetAllBanks()
        {
            var banks = await _bankService.GetAllBanksAsync();
            return Ok(new { Status = "Success", Data = banks });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Bank>> GetBankById(int id)
        {
            try
            {
                var bank = await _bankService.GetBankByIdAsync(id);
                return Ok(new { Status = "Success", Data = bank });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Status = "Error", ex.Message });
            }
        }

        [HttpPost]
        public async Task<ActionResult> AddBank([FromBody] Bank bank)
        {
            try
            {
                await _bankService.AddBankAsync(bank);
                return CreatedAtAction(nameof(GetBankById), new { id = bank.ID }, new { Status = "Success", Data = bank });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { Status = "Error", ex.Message });
            }
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> UpdateBank(int id, [FromBody] Bank bank)
        {
            if (id != bank.ID)
            {
                return BadRequest(new { Status = "Error", Message = "ID mismatch." });
            }

            try
            {
                await _bankService.UpdateBankAsync(bank);
                return Ok(new { Status = "Success", Data = bank });
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
        public async Task<ActionResult> DeleteBank(int id)
        {
            try
            {
                await _bankService.DeleteBankAsync(id);
                return Ok(new { Status = "Success", Message = "Bank deleted successfully." });
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(new { Status = "Error", ex.Message });
            }
        }
    }
}
