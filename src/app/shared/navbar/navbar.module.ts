import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

import { MainService } from '../../services/main.service';

@NgModule({
    imports: [
      RouterModule,
      CommonModule
    ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ]
})

export class NavbarModule {}
