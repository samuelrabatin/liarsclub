import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import { MenuType } from '../.././sidebar/sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { SocketService } from '../../services/socket.service';
import { MainService } from '../../services/main.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit, OnDestroy {
  private listTitles: any[];
  location: Location;

  private notifications = [];
  private notificationTexts = [];
  private connection;

  constructor(location: Location, private mainService: MainService, private socketService: SocketService) {
      this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle.menuType !== MenuType.BRAND);
    this.getNotifications();

    this.connection = this.socketService.getMessages().subscribe((message) => {
      // this.notifications.push(message);
      if (message['type'] === 'notification') {
        if (message['msg'] === 'updated') {
          this.getNotifications();
        }
      }
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 2 );
    }
    for (let item = 0; item < this.listTitles.length; item++){
        if (this.listTitles[item].path === titlee) {
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  getPath() {
    // console.log(this.location);
    return this.location.prepareExternalUrl(this.location.path());
  }

  private getNotifications() {
    this.mainService.getNotifications().subscribe(
      d => {
        this.notifications = d.notifications;
        this.notificationTexts = [];
        for (let i = 0; i < this.notifications.length; i++) {
          if (this.notifications[i].type === 'event') {
            this.notificationTexts.push(this.notifications[i].text.notificationText);
          }
        }
      },
      e => {
        console.log(e);
      }
    );
  }
}
