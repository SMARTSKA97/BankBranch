using BankAPI.DAL.Models.DTO;
using BankAPI.DAL.Models;
using BankAPI.DAL.Repository.Interface;
using BankAPI.BAL.Services.Interface;
using AutoMapper;

namespace BankAPI.BAL.Services
{
    public class BranchService : IBranchService
    {
        private readonly IBranchRepository _branchRepository;
        private readonly IMapper _mapper;

        public BranchService(IBranchRepository branchRepository, IMapper mapper)
        {
            _branchRepository = branchRepository;
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
