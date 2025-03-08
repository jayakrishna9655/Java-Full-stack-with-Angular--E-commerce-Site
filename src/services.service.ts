import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl="http://localhost:8080/api/create";

  constructor(private http:HttpClient) { }

  createTask(newtask:any):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,newtask);
  }

  getalldata():Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl);
  
    }

    updatetask(taskId:number,updatedtask:Task):Observable<Task>{
      return this.http.put<Task>(this.apiUrl+'/'+taskId,updatedtask);
    }

    deleteTask(taskId:number){
      return this.http.delete<Task>(this.apiUrl+'/'+taskId);
    }
    





}
