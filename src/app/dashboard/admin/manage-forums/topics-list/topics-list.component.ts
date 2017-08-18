import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { TopicsService } from '../../../../services/topics.service';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css', '../manage-forums.component.css']
})
export class TopicsListComponent implements OnInit {
  public topics;
  private userNames = [];
  private newTitle;
  private newDescription;
  private parentForumId;
  private filterTopics;

  @Input('forumSelectOptions') forumSelectOptions;
  @Output() gotoPostsEvent: EventEmitter<object> = new EventEmitter();
  @Output() topicUpdated: EventEmitter<string> = new EventEmitter();

  private forumSelectOption: IMultiSelectOption;
  private selectSettings: IMultiSelectSettings;
  private selectText: IMultiSelectTexts;
  private canAdd = false;

  constructor( private mainService: MainService, private topicService: TopicsService ) { }

  ngOnInit() {
    this.getTopicData();

    this.selectSettings = {
      checkedStyle: 'fontawesome',
      containerClasses: '',
      buttonClasses: 'btn-group select-with-transition form-control font-size-20 text-left',
      itemClasses: 'w-100',
      dynamicTitleMaxItems: 3,
      selectionLimit: 1,
      autoUnselect: true,
      enableSearch: true,
      closeOnSelect: true
    };

    this.selectText = {
      defaultTitle: 'All Topics'
    };
  }

  private getTopicData() {
    this.topicService.getAllTopics().subscribe(
      d => {
        this.topics = d;
        this.forumSelectOption = this.forumSelectOptions;
        this.updateForum(this.parentForumId);

        this.getUserName();
      },
      e => {
        console.log(e);
      }
    );
  }

  private updateForum(forumId) {
    this.filterTopics = [];

    if (!forumId) {
      this.filterTopics = this.topics;
    } else {
      this.canAdd = true;
      this.parentForumId = forumId;

      for (let i = 0; i < this.topics.length; i++) {
        if (this.topics[i].forumId === forumId) {
          this.filterTopics.push(this.topics[i]);
        }
      }
    }
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
    this.topicService.activateTopic(id).subscribe(
      d => {
        if (d.type === 'true') {
          this.filterTopics[idx].confirmed = true;
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private deactivate(id, idx) {
    this.topicService.deactivateTopic(id).subscribe(
      d => {
        if (d.type === 'true') {
          this.filterTopics[idx].confirmed = false;
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private delete(id, idx) {
    this.topicService.deleteTopic(id).subscribe(
      d => {
        if (d.type === 'true') {
          this.filterTopics.splice(idx, 1);
          this.topicUpdated.emit('topic deleted');
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private topicAdded() {
    this.getTopicData();
  }

  private addNewTopic() {
    this.topicService.addTopic({title: this.newTitle, text: this.newDescription, forumId: this.parentForumId }).subscribe(
      d => {
        this.newTitle = '';
        this.newDescription = '';
        this.topicAdded();
        this.topicUpdated.emit('topic added');
      },
      e => {
        console.log(e);
      }
    );
  }

  private gotoPosts(idx) {
    this.gotoPostsEvent.emit(this.filterTopics[idx]);
  }

  private parentForumChanged() {
    this.updateForum(this.parentForumId[0]);
  }
}
