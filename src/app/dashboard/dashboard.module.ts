import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MODULE_ROUTES,MODULE_COMPONENTS } from './dashboard.routes';
import { ClubComponent } from './connect/clubs/club/club.component';
import { AddClubComponent } from './connect/clubs/add-club/add-club.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS, ClubComponent, AddClubComponent ]
})

export class DashboardModule{}
