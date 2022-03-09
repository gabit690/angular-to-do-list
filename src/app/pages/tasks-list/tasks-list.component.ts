import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  private _tasks: any[] = [];
  private _tableIcon: any;

  constructor(private persistence: PersistenceService) {
    this._tasks = persistence.getList();
    this._tableIcon = faTableList;
  }

  ngOnInit(): void {

  }

  get tableIcon(): any {
    return this._tableIcon;
  }

  get tasks(): any[] {
    return this._tasks;
  }

}
