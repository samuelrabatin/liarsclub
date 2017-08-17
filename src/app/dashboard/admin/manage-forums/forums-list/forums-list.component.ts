import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css', '../manage-forums.component.css']
})
export class ForumsListComponent implements OnInit {
  public forums;
  public forumSelectOptions;

  private userNames = [];
  private newTitle;
  private newDescription;

  @Output() gotoTopicEvent: EventEmitter<string> = new EventEmitter();

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    this.getForumData();
  }

  private getForumData() {
    this.mainService.getAllForums().subscribe(
      d => {
        this.forums = d;
        this.getUserName();
        this.forumSelectOptions = d.map((val, idx) => {
          return {id: val._id, name: val.title};
        });
      },
      e => {
        console.log(e);
      }
    );
  }

  private getUserName() {
    this.mainService.getAllUsers().subscribe(
      d => {
        this.mainService.getAllProfiles().subscribe(
          profiles => {
            d.users.map((val, idx) => {
              this.userNames[val._id] = val.name;
              for (let i = 0; i < profiles.length; i++) {
                if (profiles[i].username === val.name) {
                  this.userNames[val._id] = `${this.userNames[val._id]} (${profiles[i].firstname} ${profiles[i].lastname})`;
                }
              }
            });
          },
          e1 => {
            console.log(e1);
          }
        );
      },
      e => {
        console.log(e);
      }
    );
  }

  private activate(id, idx) {
    this.mainService.activateForum(id).subscribe(
      d => {
        if (d.type === 'true') {
          this.forums[idx].confirmed = true;
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private deactivate(id, idx) {
    this.mainService.deactivateForum(id).subscribe(
      d => {
        if (d.type === 'true') {
          this.forums[idx].confirmed = false;
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private delete(id, idx) {
    this.mainService.deleteForum(id).subscribe(
      d => {
        if (d.type === 'true') {
          this.forums.splice(idx, 1);
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private forumAdded() {
    this.getForumData();
  }

  private addNewForum() {
    this.mainService.addForum({title: this.newTitle, description: this.newDescription}).subscribe(
      d => {
        this.newTitle = '';
        this.newDescription = '';
        this.forumAdded();
      },
      e => {
        console.log(e);
      }
    );
  }

  private gotoTopic(idx) {
    this.gotoTopicEvent.emit(idx);
  }
}
