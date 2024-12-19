using System.ComponentModel.DataAnnotations;

namespace ToDoAPI.Models
{
    public class ToDoTask
    {
        [Key]
        [Required]
        public int Id { get; init; }

        [Required(ErrorMessage = "Nome é obrigatório!")]
        [MaxLength(100,ErrorMessage = "O tamanho do nome não pode exceder 100 caracteres!")]
        public string? Name { get; set; }

        [MaxLength(250)]
        public string? Description { get; set; }

        [Required(ErrorMessage="Não foi informado se a tarefa está conclúida ou não!")]
        public bool IsCompleted { get; set; } = false;
    }
}
