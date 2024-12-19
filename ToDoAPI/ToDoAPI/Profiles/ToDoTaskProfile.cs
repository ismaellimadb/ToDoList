using AutoMapper;
using ToDoAPI.Data.Dtos;
using ToDoAPI.Models;

namespace ToDoAPI.Profiles
{
    public class ToDoTaskProfile : Profile
    {
        public ToDoTaskProfile()
        {
            CreateMap<CreateToDoTaskDto, ToDoTask>();
            CreateMap<UpdateToDoTaskDto, ToDoTask>();
            CreateMap<ToDoTask, UpdateToDoTaskDto>();
            CreateMap<ToDoTask, ReadToDoTaskDto>();
        }
    }
}
