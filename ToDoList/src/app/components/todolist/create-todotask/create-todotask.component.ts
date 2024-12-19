import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { TodotaskService } from '../todotask.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-todotask',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterLink,RouterLinkActive,ReactiveFormsModule,CommonModule],
  templateUrl: './create-todotask.component.html',
  styleUrl: './create-todotask.component.css'
})
export class CreateTodotaskComponent {
  
  form!: FormGroup;

  constructor(private service: TodotaskService,
    private router: Router,
    private formBuilder: FormBuilder
  ){  }

  createToDoTask() {
    if(this.form.valid){
      this.service.PostToDoTask(this.form.value).subscribe(() => {
        this.router.navigate(['/listToDoTask'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/listToDoTask'])
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/), 
        Validators.maxLength(100),
        Validators.minLength(3)
      ])],
      description: ['',[Validators.maxLength(250)]],
      isCompleted: [false,[Validators.required]]
    })
  }

  dwellBoton(): string {
    if(this.form.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
