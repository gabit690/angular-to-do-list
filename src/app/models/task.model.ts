export class Task {

  private _id: number;
  private _detail: string;
  private _priority: string;

  constructor(id: number, detail: string, priority: string) {
    this._id = id;
    this._detail = detail;
    this._priority = priority;
  }

  get id(): number {
    return this._id;
  }

  get detail(): string {
    return this._detail;
  }

  get priority(): string {
    return this._priority;
  }

}