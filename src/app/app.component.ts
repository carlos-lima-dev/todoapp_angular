import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todolist/todolist.component';
import { AddTaskComponent } from './components/addtask/addtask.component';
import { Task } from './task.model';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RemoveallComponent } from './components/removeall/removeall.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TodoListComponent,
    AddTaskComponent,
    HeaderComponent,
    FooterComponent,
    RemoveallComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];
  selectedTasks: Task[] = [];
  currentYear: number = new Date().getFullYear();

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
    if (task.completed) {
      this.selectedTasks.push(task);
    } else {
      this.selectedTasks = this.selectedTasks.filter((t) => t.id !== task.id);
    }
  }
  removeSelectedTasks() {
    this.tasks = this.tasks.filter(
      (task) => !this.selectedTasks.includes(task)
    );
    this.selectedTasks = [];
  }
}
