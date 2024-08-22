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
            CreateMap<Bank, BankWithBranchesDTO>()
    //.ForMember(dest => dest.BankName, opt => opt.MapFrom(src => src.BankName))
    .ForMember(dest => dest.Branches, opt => opt.Ignore());

        }
    }
}
