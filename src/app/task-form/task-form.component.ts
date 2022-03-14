import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  task = new FormControl('');

  constructor(private taskService: TaskService) {}

  clearForm(): void {
    this.task.setValue('');
  }

  submitForm(): void {
    const taskToSubmit = this.task.value;
    this.taskService.addTask(taskToSubmit);
    this.clearForm();
  }
}
