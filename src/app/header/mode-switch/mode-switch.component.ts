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
    const theme = localStorage.getItem('theme');
    this._switchIcon = (theme === 'dark') ? faSun : faMoon;
    document.documentElement.classList.add(theme!);
    document.getElementsByTagName('nav')[0].classList.add(theme!);
  }

  get switchIcon(): any {
    return this._switchIcon;
  }

  toggleMode(): void {
    const previousTheme = localStorage.getItem('theme')!;
    const darkModeActivated = (previousTheme !== 'dark');
    this._switchIcon = darkModeActivated ? faSun : faMoon;
    const newTheme = darkModeActivated ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.add(newTheme);
    document.getElementsByTagName('nav')[0].classList.add(newTheme);
    document.documentElement.classList.remove(previousTheme);
    document.getElementsByTagName('nav')[0].classList.remove(previousTheme);
  }
}
