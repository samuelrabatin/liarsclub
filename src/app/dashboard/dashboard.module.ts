import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FooterModule } from '../shared/footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavbarModule} from '../shared/navbar/navbar.module';

import { MODULE_ROUTES,MODULE_COMPONENTS } from './dashboard.routes';
import { ClubComponent } from './connect/clubs/club/club.component';
import { AddClubComponent } from './connect/clubs/add-club/add-club.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES),
        SidebarModule,
        NavbarModule,
        FooterModule,
    ],
    declarations: [ MODULE_COMPONENTS, ClubComponent, AddClubComponent, LoginComponent, RegisterComponent ]
})

export class DashboardModule{}
