using BankAPI.DAL.Models.DTO;
using BankAPI.DAL.Models;
using BankAPI.DAL.Repository.Interface;
using BankAPI.BAL.Services.Interface;
using AutoMapper;

namespace BankAPI.BAL.Services
{
    public class BankService : IBankService
    {
        private readonly IBankRepository _bankRepository;
        private readonly IMapper _mapper;

        public BankService(IBankRepository bankRepository, IMapper mapper)
        {
            _bankRepository = bankRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<BankDTO>> GetAllBanksAsync()
        {
            var banks = await _bankRepository.GetAllBanksAsync();
            return _mapper.Map<IEnumerable<BankDTO>>(banks);
        }

        public async Task<BankDTO> GetBankByIdAsync(int id)
        {
            var bank = await _bankRepository.GetBankByIdAsync(id);
            return _mapper.Map<BankDTO>(bank);
        }

        public async Task AddBankAsync(BankDTO bankDto)
        {
            var bank = _mapper.Map<Bank>(bankDto);
            await _bankRepository.AddBankAsync(bank);
        }

        public async Task UpdateBankAsync(BankDTO bankDto)
        {
            var bank = _mapper.Map<Bank>(bankDto);
            await _bankRepository.UpdateBankAsync(bank);
        }

        public async Task DeleteBankAsync(int id)
        {
            await _bankRepository.DeleteBankAsync(id);
        }
    }
}
