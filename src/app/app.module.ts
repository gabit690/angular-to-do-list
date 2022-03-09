import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ModeSwitchComponent } from './header/mode-switch/mode-switch.component';

import { FooterComponent } from './footer/footer.component';

import { Route, RouterModule } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';

const routes: Route[] = [
  {path:'', component: TaskComponent},
  {path:'tasks', component: TasksListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ModeSwitchComponent,
    TaskComponent,
    TasksListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
