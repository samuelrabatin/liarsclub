import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';

import { FooterModule } from '../shared/footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavbarModule} from '../shared/navbar/navbar.module';

import { MODULE_ROUTES, MODULE_COMPONENTS } from './dashboard.routes';
import { ProfileComponent } from './users/profile/profile.component';
import { AddEditComponent } from './setups/add-edit/add-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES),
        SidebarModule,
        NavbarModule,
        FooterModule,
        FormsModule,
        Ng2CloudinaryModule,
        FileUploadModule,
    ],
    declarations: [ MODULE_COMPONENTS, ProfileComponent, AddEditComponent ]
})

export class DashboardModule {}
