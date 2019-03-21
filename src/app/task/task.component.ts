import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() received: EventEmitter<Task>;
  tasks: Task[] = [];

  ngOnInit() {
    this.received.subscribe(
      (newTask) => {
        this.tasks.push(newTask);
      }
    )
  }

}
