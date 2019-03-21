import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  minDate = new Date();
  @Output() taskAdded = new EventEmitter<Task>();

  onAdd(form: NgForm) {
    const value = form.value;
    const newTask = new Task(value.description, value.date.format("Do MMM YY"), value.priority);
    this.taskAdded.emit(newTask);
  }

}
