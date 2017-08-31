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

  private deleteClub(clubId) {
    this.mainService.removeClub(clubId).subscribe(
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

  private waitingMsg(club) {
    if (club.tagWaitingMembers === 1) {
      return '(one is waiting for approval)';
    } else if (club.tagWaitingMembers > 1) {
      return `(${club.tagWaitingMembers} are waiting for approval)`;
    } else {
      return '';
    }
  }
}
