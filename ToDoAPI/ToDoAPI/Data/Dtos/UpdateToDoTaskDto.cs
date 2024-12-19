using System.ComponentModel.DataAnnotations;

namespace ToDoAPI.Data.Dtos
{
    public class UpdateToDoTaskDto
    {
        [Required(ErrorMessage = "Nome é obrigatório!")]
        [StringLength(100, ErrorMessage = "O tamanho do nome não pode exceder 100 caracteres!")]
        public string Name { get;  set; }

        [StringLength(250, ErrorMessage = "O tamanho da descrição não pode exceder 250 caracteres!")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "Não foi informado se a tarefa está conclúida ou não!")]
        public bool IsCompleted { get; set; } = false;
    }
}
