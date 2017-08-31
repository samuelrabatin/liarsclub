import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../../services/main.service';

declare var $: any;

@Component({
  selector: 'app-club-members-list',
  templateUrl: './club-members-list.component.html',
  styleUrls: ['./club-members-list.component.css']
})
export class ClubMembersListComponent implements OnInit, AfterViewChecked {
  private clubId;
  private club;
  private activeUsers = [];
  private pastUsers = [];
  private waitingUsers = [];
  private users = [];

  private memberState = [];
  private memberType = [];

  constructor(private mainService: MainService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number
      this.clubId = id;

      this.getClub();
    });
  }

  ngAfterViewChecked() {
    $('.selectpicker').selectpicker({
      containerClass: 'text-center'
    });
  }

  private getClub() {
    this.users = [];
    this.activeUsers = [];
    this.pastUsers = [];
    this.waitingUsers = [];
    this.mainService.getClubById(this.clubId).subscribe(
      d => {
        if (d.type) {
          this.club = d.club;
          for (let i = 0; this.club.taggedUsers && i < this.club.taggedUsers.length; i++) {
            const user = this.club.taggedUsers[i];
            if (user.confirmed === false) {
              this.waitingUsers.push(user);
            } else if (user.memberState === 'active') {
              this.activeUsers.push(user);
            } else if (user.memberState === 'past') {
              this.pastUsers.push(user);
            }
          }

          this.users = this.activeUsers.concat(this.pastUsers.concat(this.waitingUsers));
          for (let i = 0; i < this.users.length; i++) {
            this.memberState[i] = this.users[i].memberState;
            this.memberType[i] = this.users[i].memberType;
          }
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private updateUser(idx, user) {
    user.memberState = this.memberState[idx];
    user.memberType = this.memberType[idx];

    this.updateUserTag(user);
  }

  private approveTag(user) {
    user.confirmed = true;

    this.updateUserTag(user);
  }

  private rejectTag(user) {
    user.confirmed = false;

    this.updateUserTag(user);
  }

  private updateUserTag(user) {
    this.mainService.updateUserTag(this.clubId, user).subscribe(
      d => {
        if (d.type) {
          // this.getClub();
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private removeTag(user) {
    this.mainService.untagClubWithUserId(this.clubId, user.userId).subscribe(
      d => {
        if (d.type) {
          this.getClub();
        }
      },
      e => {
        console.log(e);
      }
    );
  }
}
