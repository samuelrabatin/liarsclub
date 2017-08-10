import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { ColorPickerModule } from 'ngx-color-picker';

import { FooterModule } from '../shared/footer/footer.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NavbarModule} from '../shared/navbar/navbar.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { MODULE_ROUTES, MODULE_COMPONENTS } from './dashboard.routes';
import { ProfileComponent } from './users/profile/profile.component';
import { AddEditComponent } from './setups/add-edit/add-edit.component';
import { ClubDetailLineComponent } from './admin/manage-clubs/club-detail-line/club-detail-line.component';
import { UploaderComponent } from './setups/uploader/uploader.component';
import { AboutComponent } from './about/about.component';
import { SetupDetailComponent } from './setups/setup-detail/setup-detail.component';
import { ManageSetupsComponent } from './admin/manage-setups/manage-setups.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(MODULE_ROUTES),
        SidebarModule,
        NavbarModule,
        FooterModule,
        FormsModule,
        Ng2CloudinaryModule,
        ColorPickerModule,
        FileUploadModule,
        MultiselectDropdownModule,
    ],
    declarations: [ MODULE_COMPONENTS, ProfileComponent, AddEditComponent, ClubDetailLineComponent, UploaderComponent, AboutComponent, SetupDetailComponent, ManageSetupsComponent ]
})

export class DashboardModule {}
