import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';

@NgModule({
    imports: [ RouterModule, CommonModule, Ng2CloudinaryModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
