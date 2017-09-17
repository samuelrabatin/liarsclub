import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { MenuType } from './sidebar.metadata';
import { Router } from '@angular/router';

import { MainService } from '../services/main.service';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit, AfterViewChecked {
    public menuItems: any[];
    private fullname: String;
    private loaded = false;
    private firstLoad = true;

    @ViewChild('adminPanel') adminPanel;

    constructor( private mainService: MainService, private router: Router ) {}

    ngOnInit() {
      $.getScript('../../assets/js/sidebar-moving-tab.js');
      this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    }

    ngAfterViewChecked() {
      if (this.loaded && this.firstLoad) {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.firstLoad = false;
        this.loaded = false;
      }
    }

    logout(evt) {
      evt.preventDefault();

      this.mainService.logout().subscribe(
        d => {
          this.mainService.loading = false;
          localStorage.setItem('username', '');
          localStorage.setItem('liarsclubtoken', '');
          this.router.navigate(['/users/login']);
        },
        e => {
          this.mainService.loading = false;
          console.log(e);
        }
      );
    }

    gotoSetup() {
      if (this.mainService.currentViewSetup) {
        this.mainService.currentViewSetup.viewDetails = false;
      }
      this.router.navigate(['setups']);
    }
}
