import { Component, OnInit } from '@angular/core';
import { ClubComponent } from './club/club.component';
import { AddClubComponent } from './add-club/add-club.component';

import { MainService } from '../../../services/main.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'clubs-cmp ',
    templateUrl: 'clubs.component.html',
    styleUrls: [ 'clubs.component.css' ]
})

export class ClubsComponent implements OnInit {
    private clubs: any;

    constructor( private mainService: MainService ) {
    }

    ngOnInit() {
      this.getClubs();
    }

    public getClubs() {
      this.mainService.getConfirmedClubs().subscribe(
        d => {
          this.clubs = d.data;
          for (let i = 0; i < this.clubs.length; i++) {
            const taggedUsers = this.clubs[i].taggedUsers.map((val, index) => { return val.user; });
            const index = taggedUsers.indexOf(localStorage.getItem('username'));
            if (index !== -1) {
              this.clubs[i].tagged = true;
              this.clubs[i].tagConfirmed = this.clubs[i].taggedUsers[index].confirmed;
              this.clubs[i].taggedIndex = index;
            } else {
              this.clubs[i].tagged = false;
            }
          }

          this.mainService.loading = false;
        },
        e => { console.log(e); this.mainService.loading = false; }
      );
    }

    private clubAdded() {
      $.notify({
        icon: 'notifications',
        message: 'Your new club request is under review'
      }, {
        timer: 3000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
    }
}
