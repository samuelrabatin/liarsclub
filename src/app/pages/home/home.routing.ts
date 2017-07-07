import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectComponent } from './connect/connect.component';
import { SetupsComponent } from './setups/setups.component';
import { DiscussComponent } from './discuss/discuss.component';
import { LearnComponent } from './learn/learn.component';
import { AboutComponent } from './about/about.component';


const routes: Routes =[
  { path: 'home',  component: HomeComponent,
      children: [
      { path: 'dashboard',      component: DashboardComponent },
      { path: 'connect',        component: ConnectComponent },
      { path: 'setups',         component: SetupsComponent },
      { path: 'discuss',        component: DiscussComponent },
      { path: 'learn',          component: LearnComponent },
      { path: 'about',          component: AboutComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }

