import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: []
})
export class Error404Component implements OnInit {

  private _errorIcon: any;

  constructor(private router: Router) {
    this._errorIcon = faXmark;
  }

  ngOnInit(): void {
  }

  get errorIcon(): any {
    return this._errorIcon;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

}
