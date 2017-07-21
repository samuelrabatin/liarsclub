import { Component, OnInit } from '@angular/core';
import { ClubComponent } from './club/club.component';
import { AddClubComponent } from './add-club/add-club.component';

import { MainService } from '../../../services/main.service';

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
      this.mainService.getClubs().subscribe(
        d => { this.clubs = d.data; this.mainService.loading = false; },
        e => { console.log(e); this.mainService.loading = false; }
      );
    }
}
