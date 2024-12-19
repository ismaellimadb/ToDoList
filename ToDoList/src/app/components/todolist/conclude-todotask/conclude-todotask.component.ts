import { Component } from '@angular/core';
import { ToDoTask } from '../todoTask';
import { TodotaskService } from '../todotask.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conclude-todotask',
  standalone: true,
  imports: [],
  templateUrl: './conclude-todotask.component.html',
  styleUrl: './conclude-todotask.component.css'
})
export class ConcludeTodotaskComponent {

  constructor(private service: TodotaskService,
    private router: Router,
    private route: ActivatedRoute
  ){  }

  todoTask: ToDoTask = {
    id:0,
    name: '',
    description:'',
    isCompleted: false
  }

  cancel(){
    this.router.navigate(['/listToDoTask'])
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.todoTask.id = parseInt(id!);
  }

  concludeToDoTask() {
    const patchDocument = [
      { op: 'replace', path: '/isCompleted', value: 'true' },
    ];

    this.service.updateParcialToDoTask(this.todoTask.id!, patchDocument)
      .subscribe({
        next: () => this.router.navigate(['/listToDoTask']),
        error: (error) => console.error('Erro ao atualizar tarefa:', error)
      });
    }
}
