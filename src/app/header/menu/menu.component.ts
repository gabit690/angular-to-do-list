import { Component, OnInit } from '@angular/core';
import { faPlus, faListUl } from '@fortawesome/free-solid-svg-icons'

const isActivated = (button: any, activatedId: string): boolean => {
  return button.classList.contains('menu__button--activated') && (button.id === activatedId);
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private activatedButton = '';
  private _plusIcon = faPlus;
  private _listIcon = faListUl;

  constructor() { }

  ngOnInit(): void {
    const path = window.location.pathname;
    switch (path) {
      case '/':
        this.activatedButton = 'add';
        document.getElementById('add')?.classList.add('menu__button--activated');
        break;
      case '/tasks':
        this.activatedButton = 'list';
        document.getElementById('list')?.classList.add('menu__button--activated');
        break;
      default:
        this.activatedButton = '';
        break;
    }
  }

  get plusIcon(): any {
    return this._plusIcon;
  }

  get listIcon(): any {
    return this._listIcon;
  }

  selected(event: any): void {
    const menuButton = event.target;
    const buttonActivated = isActivated(menuButton, this.activatedButton);
    if (!buttonActivated) {
      if (this.activatedButton) {
        document.getElementById(this.activatedButton)?.classList.remove('menu__button--activated');
      }
      menuButton.classList.add('menu__button--activated');
      this.activatedButton = menuButton.id;
    }
  }
}
