import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = TASKS;
  constructor() {}

  /**
   * Returns an observable that resolves into an Array of tasks
   */
  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: string): void {
    this.tasks.push({ text: task, complete: false });
  }

  toggleTaskCompletion(task: string): void {
    const taskToUpdate = this.tasks.find((item) => item.text === task)!;

    taskToUpdate.complete = !taskToUpdate.complete;
  }
}
