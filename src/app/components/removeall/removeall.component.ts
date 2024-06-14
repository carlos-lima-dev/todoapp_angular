import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-removeall',
  standalone: true,
  imports: [],
  templateUrl: './removeall.component.html',
  styleUrl: './removeall.component.css',
})
export class RemoveallComponent {
  @Output() tasksRemove: EventEmitter<void> = new EventEmitter<void>();

  onRemoveTasks() {
    this.tasksRemove.emit();
  }
}
