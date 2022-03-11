import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { ModeSwitchComponent } from './header/mode-switch/mode-switch.component';
import { Route, RouterModule } from '@angular/router';
import { TaskComponent } from './pages/task/task.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { UpdateComponent } from './pages/update/update.component';
import { Error404Component } from './pages/error404/error404.component';
import { FooterComponent } from './footer/footer.component';

const routes: Route[] = [
  {path:'', component: TaskComponent},
  {path:'tasks', component: TasksListComponent},
  {path:'update/:id', component: UpdateComponent},
  {path:'**', component: Error404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ModeSwitchComponent,
    TaskComponent,
    TasksListComponent,
    UpdateComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
