using System.ComponentModel.DataAnnotations;

namespace ToDoAPI.Data.Dtos
{
    public class ReadToDoTaskDto
    {

        public int Id { get; init; }
        public string? Name { get; private set; }
        public string? Description { get; set; }
        public bool IsCompleted { get; set; } = false;
    }
}
