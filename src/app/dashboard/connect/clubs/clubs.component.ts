import { Component, OnInit } from '@angular/core';
import { ClubComponent } from './club/club.component';

@Component({
    moduleId: module.id,
    selector: 'clubs-cmp ',
    templateUrl: 'clubs.component.html',
    styleUrls: [ 'clubs.component.css' ]
})

export class ClubsComponent implements OnInit{
    private clubs:any;

    ngOnInit(){
      this.clubs = [
        {
          title: "Princeton Liars Club",
          type: "Regularly",
          regularType: "weeks",
          regularPeriod: 2,
          dayOfWeek: "Friday",
          time: "16:00",
          starting: "2012/2/12",
          location: "Whiteman College Dining Hall",
          activeMembers: 46,
          pastMembers: 100
        }
      ];
    }
}
