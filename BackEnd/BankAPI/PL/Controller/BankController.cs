using BankAPI.BAL.Services.Interface;
using BankAPI.DAL.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace BankAPI.PL.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class BankController : ControllerBase
    {
        private readonly IBankService _bankService;

        public BankController(IBankService bankService)
        {
            _bankService = bankService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<BankDTO>>> GetAllBanks()
        {
            var banks = await _bankService.GetAllBanksAsync();
            return Ok(banks);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BankDTO>> GetBankById(int id)
        {
            var bank = await _bankService.GetBankByIdAsync(id);
            if (bank == null)
            {
                return NotFound();
            }
            return Ok(bank);
        }

        [HttpPost]
        public async Task<ActionResult> AddBank(BankDTO bankDto)
        {
            await _bankService.AddBankAsync(bankDto);
            return CreatedAtAction(nameof(GetBankById), new { id = bankDto.Id }, bankDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateBank(int id, BankDTO bankDto)
        {
            if (id != bankDto.Id)
            {
                return BadRequest();
            }

            await _bankService.UpdateBankAsync(bankDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBank(int id)
        {
            var bank = await _bankService.GetBankByIdAsync(id);
            if (bank == null)
            {
                return NotFound();
            }

            await _bankService.DeleteBankAsync(id);
            return NoContent();
        }
    }
}

