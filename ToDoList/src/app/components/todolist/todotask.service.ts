import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoTask } from './todoTask';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodotaskService {

  private readonly API = 'http://localhost:5241/ToDo'

  constructor(private http: HttpClient) { }

  GetToDoTasks() : Observable<ToDoTask[]>{
    return this.http.get<ToDoTask[]>(this.API)
  }

  PostToDoTask(todoTask: ToDoTask) :  Observable<ToDoTask>{
    return this.http.post<ToDoTask>(this.API, todoTask)
  }

  DeleteToDoTask(id: number) : Observable<ToDoTask> {
    const url = `${this.API}/${id}`
    return this.http.delete<ToDoTask>(url)
  }

  GetToDoTaskById(id: number) : Observable<ToDoTask> {
    const url = `${this.API}/${id}`
    return this.http.get<ToDoTask>(url)
  }

  PutToDoTask(todoTask: ToDoTask) :  Observable<ToDoTask>{
    const url = `${this.API}/${todoTask.id}`
    return this.http.put<ToDoTask>(url, todoTask)
  }

  updateParcialToDoTask(id: number, patchDocument: any[]): Observable<void> {
    const url = `${this.API}/${id}`
    const headers = new HttpHeaders({ 'Content-Type': 'application/json-patch+json' })
    return this.http.patch<void>(url, patchDocument, { headers })
  }

}
