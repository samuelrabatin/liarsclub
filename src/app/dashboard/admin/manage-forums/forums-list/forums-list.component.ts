import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css', '../manage-forums.component.css']
})
export class ForumsListComponent implements OnInit {
  public forums;
  public forumSelectOptions;

  private newTitle;
  private newDescription;

  private tmpForums = [];
  private curDragStart;
  private curDragIndex;

  @Output() gotoTopicEvent: EventEmitter<string> = new EventEmitter();

  constructor( private mainService: MainService, private storageService: StorageService ) { }

  ngOnInit() {
    this.getForumData();
  }

  private getForumData() {
    this.mainService.getAllForums().subscribe(
      d => {
        this.forums = d;
        this.forumSelectOptions = d.map((val, idx) => {
          return {id: val._id, name: val.title};
        });
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

  private forumDragStart(idx) {
    console.log('forumDragStart: ', idx);
    this.tmpForums = this.forums.slice();
    this.curDragStart = idx;
    this.curDragIndex = idx;
  }
  private forumDragEnd(idx) {
    console.log('forumDragEnd: ', idx);
    this.mainService.updateForumsOrder(this.forums).subscribe(
      d => {
      },
      e => {
        console.log(e);
      }
    );
  }
  private forumDragEnter(idx) {
    if (idx !== this.curDragIndex) {
      this.curDragIndex = idx;
      this.forums = this.tmpForums.slice();

      const row = this.forums[this.curDragStart];
      this.forums.splice(this.curDragStart, 1);
      this.forums.splice(idx, 0, row);
    }
  }
}
