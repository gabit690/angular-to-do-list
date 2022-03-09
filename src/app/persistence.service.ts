import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  save(task: string, level: string): void {
    const tasksSaved: any = localStorage.getItem('tasks');
    const tasksList: object[] = tasksSaved ? JSON.parse(tasksSaved) : [];
    const newTask = new Task(tasksList.length + 1, task.toLowerCase().trim(), level);
    tasksList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  };

  getList(): any[] {
    const list: any = localStorage.getItem('tasks');
    const tasksList: any[] = list ? JSON.parse(list) : [];
    return tasksList;
  }

}
