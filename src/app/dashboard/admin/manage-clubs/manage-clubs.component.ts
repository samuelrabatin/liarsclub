import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-manage-clubs',
  templateUrl: './manage-clubs.component.html',
  styleUrls: ['./manage-clubs.component.css']
})
export class ManageClubsComponent implements OnInit {
  private clubs = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getClubs();
  }

  public getClubs() {
    this.mainService.getClubs().subscribe(
      d => {
        this.clubs = d.data;
        this.mainService.loading = false;
      },
      e => { console.log(e); this.mainService.loading = false; }
    );
  }

  public generateLines() {

  }

  public tblClicked(evt) {
    if (evt.target.tagName === 'BUTTON') {
      const clubId = evt.target.getAttribute('club-id');
      const username = evt.target.getAttribute('username');
      this.mainService.untagClubWithUsername(clubId, username).subscribe(
        d => { this.getClubs(); },
        e => { console.log(e); }
      );
    }
  }

  private approveClub(clubId) {
    this.mainService.approveClub(clubId).subscribe(
      d => {
        if (d.type) {
          this.getClubs();
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private rejectClub(clubId) {
    this.mainService.rejectClub(clubId).subscribe(
      d => {
        if (d.type) {
          this.getClubs();
        }
      },
      e => {
        console.log(e);
      }
    );
  }
}
