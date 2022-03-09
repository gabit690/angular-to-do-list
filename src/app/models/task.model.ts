export class Task {

  private id: number;
  private detail: string;
  private priority: string;

  constructor(id: number, detail: string, priority: string) {
    this.id = id;
    this.detail = detail;
    this.priority = priority;
  }

  getId(): number {
    return this.id;
  }

  getDetail(): string {
    return this.detail;
  }

  getPriority(): string {
    return this.priority;
  }

}