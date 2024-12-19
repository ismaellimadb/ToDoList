import { Component, Input } from '@angular/core';
import { ToDoTask } from '../todoTask';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todotask',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './todotask.component.html',
  styleUrl: './todotask.component.css'
})
export class TodotaskComponent {

  @Input() todoTask: ToDoTask = {
    id:0,
    name: '',
    description:'',
    isCompleted: false
  }

  widthTaskDescription(): string {
    var withTask: string = ''
    if(this.todoTask.description.length >= 256) {
      withTask = 'tarefas-g'
    }else{
      withTask = 'tarefas-p'
    }

    if(this.todoTask.isCompleted){
      return withTask += ' tarefa-concluida'
    }
    return withTask += ' tarefa'
  }

}
