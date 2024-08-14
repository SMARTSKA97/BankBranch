using AutoMapper;
using BankAPI.DAL.Models.DTO;
using BankAPI.DAL.Models;

namespace BankAPI.DAL.Mapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Bank, BankDTO>().ReverseMap();
            CreateMap<Branch, BranchDTO>().ReverseMap();
        }
    }
}
