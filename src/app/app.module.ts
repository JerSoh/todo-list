import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './task/task.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
