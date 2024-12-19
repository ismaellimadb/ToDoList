using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoAPI.Data;
using ToDoAPI.Data.Dtos;
using ToDoAPI.Models;

namespace ToDoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : ControllerBase
    {
        private ToDoContext _context;
        private IMapper _mapper;

        public ToDoController(ToDoContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<ReadToDoTaskDto> GetToDoTasks()
        {
            return _mapper.Map<List<ReadToDoTaskDto>>(_context.ToDoTasks);
        }      

        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoTask>> GetToDoTaskById(int id)
        {
            var toDoTask = await _context.ToDoTasks.FirstOrDefaultAsync(x => x.Id == id);

            if (toDoTask == null)
                return NotFound();

            ReadToDoTaskDto readToDoTaskDto = _mapper.Map<ReadToDoTaskDto>(toDoTask);
            return Ok(readToDoTaskDto);
        }

        [HttpPost]
        public async Task<ActionResult<ToDoTask>> PostToDoTask(CreateToDoTaskDto createToDoTask)
        {
            ToDoTask toDoTask = _mapper.Map<ToDoTask>(createToDoTask);
            _context.ToDoTasks.Add(toDoTask);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetToDoTaskById), new { id = toDoTask.Id }, toDoTask);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoTask(int id, [FromBody] UpdateToDoTaskDto updateToDoTaskDto)
        {
            var toDoTask = await _context.ToDoTasks.FirstOrDefaultAsync(x => x.Id == id);

            if (toDoTask == null)
                return NotFound();

            _mapper.Map(updateToDoTaskDto, toDoTask);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPatch("{id}")]
        public IActionResult UpdateParcialToDoTask(int id, JsonPatchDocument<UpdateToDoTaskDto> patch)
        {
            var toDoTask = _context.ToDoTasks.FirstOrDefault(
                x => x.Id == id);

            if (toDoTask == null) 
                return NotFound();

            var updateToDoTaskDto = _mapper.Map<UpdateToDoTaskDto>(toDoTask);

            patch.ApplyTo(updateToDoTaskDto, ModelState);

            if (!TryValidateModel(updateToDoTaskDto))
            {
                return ValidationProblem(ModelState);
            }
            _mapper.Map(updateToDoTaskDto, toDoTask);
            _context.SaveChanges();
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDoTask(int id)
        {
            var toDoTask = await _context.ToDoTasks.FindAsync(id);
            if (toDoTask == null)            
                return NotFound();            

            _context.ToDoTasks.Remove(toDoTask);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
