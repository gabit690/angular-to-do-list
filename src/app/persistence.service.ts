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

  getTask(id: number): any {
    const tasks = JSON.parse(localStorage.getItem('tasks')!);
    return tasks[id - 1];
  }

  getList(): object[] {
    const list: any = localStorage.getItem('tasks');
    const tasksList: object[] = list ? JSON.parse(list) : [];
    return tasksList;
  }

  update(id: number, task: string, level: string) {
    const tasksList: any[] = JSON.parse(localStorage.getItem('tasks')!);
    tasksList[id - 1].detail = task;
    tasksList[id - 1].priority = level;
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  }

  deleteTask(id: number): void {
    const tasks = JSON.parse(localStorage.getItem('tasks')!);
    tasks.splice(id - 1, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
