import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styles: [
  ]
})
export class ModeSwitchComponent implements OnInit {

  private _switchIcon: any;

  constructor() { }

  ngOnInit(): void {
    document.documentElement.classList.add('dark');
    document.getElementsByTagName('nav')[0].classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this._switchIcon = faSun;
  }

  get switchIcon(): any {
    return this._switchIcon;
  }

  toggleMode(): void {
    const currentTheme = localStorage.getItem('theme');
    const darkModeActivated = (currentTheme !== 'dark');
    this._switchIcon = darkModeActivated ? faSun : faMoon;
    localStorage.setItem('theme', darkModeActivated ? 'dark' : '');
    if(darkModeActivated) {
      document.documentElement.classList.add('dark');
      document.getElementsByTagName('nav')[0].classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.getElementsByTagName('nav')[0].classList.remove('dark');
    }
  }
}
