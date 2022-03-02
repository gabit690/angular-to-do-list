import { Component } from '@angular/core';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private _year : number;
  private _github = faGithub;
  private _twitter = faTwitter;
  private _linkedin = faLinkedin;

  constructor() {
    this._year = (new Date()).getFullYear();
  }

  public get year() : number {
    return this._year;
  }
  
  public get github() : any {
    return this._github;
  }

  public get twitter() : any {
    return this._twitter;
  }

  public get linkedin() : any {
    return this._linkedin;
  }

}
