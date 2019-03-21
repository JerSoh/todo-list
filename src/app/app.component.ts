import { Component, EventEmitter } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskReceived = new EventEmitter<Task>();

  onTaskAdded(newTask: Task) {
    this.taskReceived.emit(newTask);
  }
}
