import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  @Input() isComplete?: boolean;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  updateStatus(task: string): void {
    this.taskService.toggleTaskCompletion(task);
  }
}
