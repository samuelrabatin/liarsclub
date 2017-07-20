import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FooterModule } from '../shared/footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavbarModule} from '../shared/navbar/navbar.module';

import { MODULE_ROUTES, MODULE_COMPONENTS } from './dashboard.routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES),
        SidebarModule,
        NavbarModule,
        FooterModule,
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
