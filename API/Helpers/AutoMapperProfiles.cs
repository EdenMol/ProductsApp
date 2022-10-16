using API.DTO;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Product, ProductDto>()
            .ForMember(dest => dest.Title, act => act.MapFrom(src => src))
            .ForMember(dest => dest.Details, act => act.MapFrom(src => src));
        }
        //  

    }
}