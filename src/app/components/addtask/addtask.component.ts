import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<Task>();
  taskTitle: string = '';

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskTitle,
        completed: false,
      };
      this.taskAdded.emit(newTask);
      this.taskTitle = '';
    }
  }
}
