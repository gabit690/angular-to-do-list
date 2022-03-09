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

  private activatedButton = 'new';
  private _plusIcon = faPlus;
  private _listIcon = faListUl;

  constructor() { }

  ngOnInit(): void {
    if (window.location.pathname == '/') {
      document.getElementById(this.activatedButton)?.classList.add('menu__button--activated');
    } 
    // It works when charge first time the page.
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
      document.getElementById(this.activatedButton)?.classList.toggle('menu__button--activated');
      menuButton.classList.toggle('menu__button--activated');
      this.activatedButton = menuButton.id;
    }
  }

}
