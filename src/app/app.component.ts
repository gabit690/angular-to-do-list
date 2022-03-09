import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'to-do-list';

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (!theme) {
      localStorage.setItem('theme', 'dark');
      console.log('FIRST');
    } else {
      console.log('APP ALREADY INITIALIZED');
    }
  }

}
