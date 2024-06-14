import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'toDo';
  tasks: Task[] = [];
  selectedTasks: Task[] = [];
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
    // Load tasks from localStorage when component initializes
    this.loadTasks();
  }

  private loadTasks() {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      try {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
          this.tasks = JSON.parse(savedTasks);
        }
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        // Handle the error or provide fallback behavior
      }
    } else {
      // Fallback to an empty array if localStorage is not available
      this.tasks = [];
    }
  }

  private saveTasks() {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } catch (error) {
        console.error('Error saving tasks to localStorage:', error);
        // Handle the error or provide fallback behavior
      }
    } else {
      // Handle saving tasks without localStorage if needed
    }
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    this.saveTasks(); // Save tasks after adding
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.saveTasks(); // Save tasks after deleting
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
    if (task.completed) {
      this.selectedTasks.push(task);
    } else {
      this.selectedTasks = this.selectedTasks.filter((t) => t.id !== task.id);
    }
    this.saveTasks(); // Save tasks after toggling completion
  }

  removeSelectedTasks() {
    this.tasks = this.tasks.filter(
      (task) => !this.selectedTasks.includes(task)
    );
    this.selectedTasks = [];
    this.saveTasks(); // Save tasks after removing selected tasks
  }
}
