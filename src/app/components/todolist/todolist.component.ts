import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../task.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskToggled = new EventEmitter<Task>();
  @Output() taskRemoved = new EventEmitter<Task>();

  toggleCompletion(task: Task) {
    this.taskToggled.emit(task);
  }

  deleteTask(task: Task) {
    this.taskRemoved.emit(task);
  }
}
