using BankWebAPI.BAL.Services;
using BankWebAPI.BAL.IServices;
using BankWebAPI.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

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
        public async Task<ActionResult<IEnumerable<Bank>>> GetBanks()
        {
            var banks = await _bankService.GetAllBanksAsync();
            return Ok(banks);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Bank>> GetBank(int id)
        {
            var bank = await _bankService.GetBankByIdAsync(id);
            if (bank == null)
            {
                return NotFound();
            }
            return Ok(bank);
        }

        [HttpPost]
        public async Task<ActionResult<Bank>> PostBank(Bank bank)
        {
            await _bankService.AddBankAsync(bank);
            return CreatedAtAction(nameof(GetBank), new { id = bank.Id }, bank);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBank(int id, Bank bank)
        {
            if (id != bank.Id)
            {
                return BadRequest();
            }

            await _bankService.UpdateBankAsync(bank);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBank(int id)
        {
            await _bankService.DeleteBankAsync(id);
            return NoContent();
        }
    }
}
