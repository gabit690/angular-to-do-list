import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ModeSwitchComponent } from './header/mode-switch/mode-switch.component';

import { FooterComponent } from './footer/footer.component';

import { Route, RouterModule } from '@angular/router';
import { NewTaskComponent } from './pages/new-task/new-task.component';

const routes: Route[] = [
  {path:'', component: NewTaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ModeSwitchComponent,
    NewTaskComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
