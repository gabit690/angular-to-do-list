import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mode-switch',
  templateUrl: './mode-switch.component.html',
  styles: [
  ]
})
export class ModeSwitchComponent implements OnInit {

  private _sunIcon = faSun;
  private _moonIcon = faMoon;
  private _colorMode: string;

  constructor() { }

  ngOnInit(): void {
    this._colorMode = 'day';
  }

  get moonIcon(): any {
    return this._moonIcon;
  }

  get sunIcon(): any {
    return this._sunIcon;
  }

  get colorMode(): string {
    return this._colorMode;
  }

  toggleMode(event: any): void {
    if(!event.target.classList.contains('day')) {
      event.target.classList.remove('night');
      event.target.classList.remove('text-indigo-900');
      event.target.classList.add('day');
      event.target.classList.add('text-orange-400');
      this._colorMode = 'day';
    } else {
      event.target.classList.remove('day');
      event.target.classList.remove('text-orange-400');
      event.target.classList.add('night');
      event.target.classList.add('text-indigo-900');
      this._colorMode = 'night';
    }
    console.log(this.colorMode);
  }

}
