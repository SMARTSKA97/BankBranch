using BankAPI.DAL.Models.DTO;
using BankAPI.DAL.Models;
using BankAPI.DAL.Repository.Interface;
using BankAPI.BAL.Services.Interface;
using AutoMapper;
using BankAPI.DAL.Repository;

namespace BankAPI.BAL.Services
{
    public class BranchService : IBranchService
    {
        private readonly IBranchRepository _branchRepository;
        private readonly IBankRepository _bankRepository;
        private readonly IMapper _mapper;

        public BranchService(IBranchRepository branchRepository, IBankRepository bankRepository, IMapper mapper)
        {
            _branchRepository = branchRepository;
            _bankRepository = bankRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<BranchDTO>> GetAllBranchesAsync()
        {
            var branches = await _branchRepository.GetAllBranchesAsync();
            return _mapper.Map<IEnumerable<BranchDTO>>(branches);
        }

        public async Task<BranchDTO> GetBranchByIdAsync(int id)
        {
            var branch = await _branchRepository.GetBranchByIdAsync(id);
            return _mapper.Map<BranchDTO>(branch);
        }

        public async Task<BankWithBranchesDTO> GetBranchesByBankAsync(int bankId)
        {
            var bank = await _bankRepository.GetBankByIdAsync(bankId);
            if (bank == null)
            {
                return null;
            }

            var branches = await _branchRepository.GetBranchesByBankIdAsync(bankId);

            var bankWithBranches = new BankWithBranchesDTO
            {
                BankName = bank.BankName,
                Branches = _mapper.Map<List<BranchDTO>>(branches)
            };

            return bankWithBranches;
        }

        public async Task<List<BranchDTO>> GetBranchesByBankIdAsync(int bankId)
        {
            var branches = await _branchRepository.GetBranchesByBankIdAsync(bankId);
            return _mapper.Map<List<BranchDTO>>(branches);
        }

        public async Task AddBranchAsync(BranchDTO branchDto)
        {
            var branch = _mapper.Map<Branch>(branchDto);
            await _branchRepository.AddBranchAsync(branch);
        }

        public async Task UpdateBranchAsync(BranchDTO branchDto)
        {
            var branch = _mapper.Map<Branch>(branchDto);
            await _branchRepository.UpdateBranchAsync(branch);
        }

        public async Task DeleteBranchAsync(int id)
        {
            await _branchRepository.DeleteBranchAsync(id);
        }
    }
}
