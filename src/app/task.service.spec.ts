import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { Task } from '../task';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('addTask', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should add task to end of tasks list in the correct format', () => {
    const taskToSubmit = 'test';
    const expected: Task = {
      text: taskToSubmit,
      complete: false,
    };

    service.addTask(taskToSubmit);

    let actual;
    service.getTasks().subscribe((tasks) => (actual = tasks));

    expect(actual).toContainEqual(expected);
  });
});
