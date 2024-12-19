import { Component } from '@angular/core';
import { ToDoTask } from '../todoTask';
import { TodotaskService } from '../todotask.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-todotask',
  standalone: true,
  imports: [],
  templateUrl: './delete-todotask.component.html',
  styleUrl: './delete-todotask.component.css'
})
export class DeleteTodotaskComponent {

  todoTask: ToDoTask = {
    id:0,
    name: '',
    description:'',
    isCompleted: false
  }
  
  constructor(private service: TodotaskService,
    private router: Router,
    private route: ActivatedRoute
  ){  }


  deleteToDoTask(){
    if(this.todoTask.id) {
      this.service.DeleteToDoTask(this.todoTask.id).subscribe(() => {
        this.router.navigate(['/listToDoTask'])
      })
    }
  }

  cancel(){
    this.router.navigate(['/listToDoTask'])
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.GetToDoTaskById(parseInt(id!)).subscribe((todoTask) => {
      this.todoTask = todoTask
    })
  }

}
