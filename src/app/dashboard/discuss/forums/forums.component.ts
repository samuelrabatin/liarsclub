import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../services/main.service';
import { TopicsService } from '../../../services/topics.service';
import { PostsService } from '../../../services/posts.service';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  moduleId: module.id,
  selector: ' forums-cmp ',
  templateUrl: 'forums.component.html',
  styleUrls: ['forums.component.css']
})

export class ForumsComponent implements OnInit {
  private forums = [];
  private topics = [];
  private totalTopics = [];
  private userNames = []

  private currentForum = [];
  private forumSelectOption: IMultiSelectOption;
  private selectSettings: IMultiSelectSettings;
  private selectText: IMultiSelectTexts;

  private newForumTitle = '';
  private newForumDescription = '';
  private newTopicTitle = '';
  private newTopicDescription = '';
  private searchText = '';

  private showForumRequest = false;
  private showTopicRequest = false;

  constructor( private mainService: MainService, private topicsService: TopicsService, private postService: PostsService ) {
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

  ngOnInit() {
    this.getAllForums();
    this.getUserName();
  }

  private getAllForums() {
    this.mainService.getConfirmedForums().subscribe(
      d => {
        this.forums = d;
        this.filterTopics();
        this.forumSelectOption = d.map((val, idx) => {
          return { id: val._id, name: val.title };
        });
      },
      e => {
        console.log(e);
      }
    );
  }

  private getTopics() {
    this.topicsService.getConfirmedTopics().subscribe(
      d => {
        this.totalTopics = d.slice();
        this.topics = d.slice();
      },
      e => {
        console.log(e);
      }
    );
  }

  private filterTopics() {
    this.topics = [];
    if (this.currentForum.length) {
      this.topicsService.getConfirmedTopicsByForumId(this.currentForum[0]).subscribe(
        d => {
          this.topics = d.slice();
          this.totalTopics = d.slice();
        },
        e => {
          console.log(e);
        }
      );
    } else {
      this.forums.map((val, idx) => {
        this.topicsService.getConfirmedTopicsByForumId(val._id).subscribe(
          d => {
            this.topics = this.topics.concat(d);
            this.topics.sort(function(v1, v2) {
              // if (v1.lastreplied && v2.lastreplied) {
              //   return v1.lastreplied < v2.lastreplied ? 1 : v1.lastreplied === v2.lastreplied ? 0 : -1;
              // } else if (v1.lastreplied && !v2.lastreplied) {
              //   return -1;
              // } else if (!v1.lastreplied && v2.lastreplied) {
              //   return 1;
              // } else {
                return v1.createdDate < v2.createdDate ? 1 : v1.createdDate === v2.createdDate ? 0 : -1;
              // }
            });
            this.totalTopics = this.topics.slice();
          },
          e => {
            console.log(e);
          }
        );
      });
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

  private addNewForum() {
    this.mainService.addForum({title: this.newForumTitle, description: this.newForumDescription}).subscribe(
      d => {
        this.newForumTitle = '';
        this.newForumDescription = '';
        this.showForumRequest = false;
        this.getAllForums();
      },
      e => {
        console.log(e);
      }
    );
  }

  private addNewTopic() {
    if (this.currentForum.length) {
      this.topicsService.addTopic({
        title: this.newTopicTitle,
        text: this.newTopicDescription,
        forumId: this.currentForum[0]
      }).subscribe(
        d => {
          this.newTopicTitle = '';
          this.newTopicDescription = '';
          this.showTopicRequest = false;
          this.filterTopics();
        },
        e => {
          console.log(e);
        }
      );
    }
  }

  private hideForumDiag() {
    this.showForumRequest = false;
  }

  private hideTopicDiag() {
    this.showTopicRequest = false;
  }

  private searchTopics() {
    const arrTopics = [];
    for (let i = 0; i < this.totalTopics.length; i++) {
      if (this.searchText === ''
        || this.totalTopics[i].title.toUpperCase().includes(this.searchText.toUpperCase())
        || this.totalTopics[i].text.toUpperCase().includes(this.searchText.toUpperCase())) {
        arrTopics.push(this.totalTopics[i]);
      }
    }

    this.topics = arrTopics.slice();
  }
}
