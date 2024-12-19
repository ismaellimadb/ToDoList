import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodotaskComponent } from '../todotask/todotask.component';
import { ToDoTask } from '../todoTask';
import { TodotaskService } from '../todotask.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-todotask',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,TodotaskComponent,CommonModule],
  templateUrl: './list-todotask.component.html',
  styleUrl: './list-todotask.component.css'
})
export class ListTodotaskComponent {
  
  todoTasks: ToDoTask[] = []

  constructor(private service: TodotaskService){  }

  ngOnInit() {
    this.service.GetToDoTasks().subscribe( {
      next: (response: ToDoTask[]) => {
        this.todoTasks = response;
      },
      error: (error: Error) => {
        console.log(error);        
      }
    })
  }  
}
