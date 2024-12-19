import { Routes } from '@angular/router';
import { CreateTodotaskComponent } from './components/todolist/create-todotask/create-todotask.component';
import { ListTodotaskComponent } from './components/todolist/list-todotask/list-todotask.component';
import { DeleteTodotaskComponent } from './components/todolist/delete-todotask/delete-todotask.component';
import { EditTodotaskComponent } from './components/todolist/edit-todotask/edit-todotask.component';
import { ConcludeTodotaskComponent } from './components/todolist/conclude-todotask/conclude-todotask.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo:'listToDoTask',
        pathMatch:'full'
    },
    {
        path: 'createToDoTask',
        component: CreateTodotaskComponent
    },
    {
        path: 'listToDoTask',
        component: ListTodotaskComponent
    },
    {
        path: 'deleteToDoTask/:id',
        component: DeleteTodotaskComponent
    },
    {
        path: 'editToDoTask/:id',
        component: EditTodotaskComponent
    },
    {
        path: 'concludeToDoTask/:id',
        component: ConcludeTodotaskComponent
    }
];
