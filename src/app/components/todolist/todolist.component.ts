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
  @Input() tasks: Task[] = []; // Recebe a lista de tarefas do componente pai

  @Output() taskToggled = new EventEmitter<Task>(); // Emite evento quando uma tarefa é alternada
  @Output() taskDeleted = new EventEmitter<Task>(); // Emite evento quando uma tarefa é deletada

  toggleCompletion(task: Task) {
    this.taskToggled.emit(task); // Emite o evento taskToggled com a tarefa como argumento
  }

  deleteTask(task: Task) {
    this.taskDeleted.emit(task); // Emite o evento taskDeleted com a tarefa como argumento
  }
}
