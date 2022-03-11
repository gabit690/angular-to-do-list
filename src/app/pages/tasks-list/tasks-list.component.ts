import { Component, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { createSelectionBox, createActionButton, createCloseButton } from './selectionBox';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: []
})
export class TasksListComponent implements OnInit {

  private _tasks: any[] = [];
  private _tableIcon: any;

  constructor(private persistence: PersistenceService, private router: Router) {
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

  updateAction(id: number): void {
    this.router.navigate(['update', id]);
  }

  deleteAction(id: number): void {
    this.persistence.deleteTask(id);
    this._tasks = this.persistence.getList();
  }

  showSelectionBox(id: number): void {
    const actionBox = createSelectionBox();
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'space-around';
    buttonsContainer.style.paddingTop = '16px';
    const updateButton = createActionButton('Update', () => this.updateAction(id));
    const deleteButton = createActionButton('Delete', () => this.deleteAction(id));
    const cancelButton = createCloseButton('Cancel');
    buttonsContainer.append(updateButton);
    buttonsContainer.append(deleteButton);
    buttonsContainer.append(cancelButton);
    actionBox.append(buttonsContainer);
    document.body.appendChild(actionBox);
  }

}
