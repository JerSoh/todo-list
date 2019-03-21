export class Task {
  public description: string;
  public dueDate: Date;
  public priority: string;

  constructor(desc: string, dueDate: Date, priority: string) {
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}