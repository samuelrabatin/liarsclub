import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { MainService } from '../services/main.service';

import { MODULE_ROUTES,MODULE_COMPONENTS } from './dashboard.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    providers: [ MainService ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
