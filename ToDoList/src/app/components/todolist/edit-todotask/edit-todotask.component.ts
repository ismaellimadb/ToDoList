import { Component } from '@angular/core';
import { ToDoTask } from '../todoTask';
import { FormsModule } from '@angular/forms';
import { TodotaskService } from '../todotask.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-todotask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-todotask.component.html',
  styleUrl: './edit-todotask.component.css'
})
export class EditTodotaskComponent {

  todoTask: ToDoTask = {
    id:0,
    name: '',
    description:'',
    isCompleted: false
  }

  isChecked: boolean = false;

  constructor(private service: TodotaskService,
    private router: Router,
    private route: ActivatedRoute
  ){  }

  editToDoTask() {
    this.service.PutToDoTask(this.todoTask).subscribe(() => {
      this.router.navigate(['/listToDoTask'])
    })
  }


  cancel() {
    this.router.navigate(['/listToDoTask'])
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.GetToDoTaskById(parseInt(id!)).subscribe((todoTask) => {
      this.todoTask = todoTask
    })
  }

}
