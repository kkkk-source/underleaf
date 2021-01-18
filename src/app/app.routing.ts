import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';

const routes: Routes =[
    { path: 'home',component: HomeComponent },
    { path: 'research', component: ResearchPageComponent },
    { path: 'research/:id/tasks', component: TaskPageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
