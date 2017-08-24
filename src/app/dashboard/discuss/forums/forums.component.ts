import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../services/main.service';
import { TopicsService } from '../../../services/topics.service';
import { PostsService } from '../../../services/posts.service';
import { StorageService } from '../../../services/storage.service';

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
  private filteredForums = [];
  private filteredTopics = [];

  private currentForum;
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
  private isTopicList = false;

  constructor( private mainService: MainService, private topicsService: TopicsService
              , private postService: PostsService, private storageService: StorageService ) {
    this.selectSettings = {
      checkedStyle: 'fontawesome',
      containerClasses: 'dropdown-container',
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
  }

  private getAllForums() {
    this.mainService.getConfirmedForums().subscribe(
      d => {
        this.forums = d.slice();
        this.filteredForums = d.slice();
        this.getTopics();
      },
      e => {
        console.log(e);
      }
    );
  }

  private filterForums() {
    this.filteredForums = [];
    for (let i = 0; i < this.forums.length; i++) {
      if (this.searchText === '' || this.forums[i].title.toUpperCase().includes(this.searchText.toUpperCase())
        || this.forums[i].description.toUpperCase().includes(this.searchText.toUpperCase())) {
        this.filteredForums.push(this.forums[i]);
      }
    }
  }

  private getTopicsByForumId(i) {
    this.topicsService.getConfirmedTopicsByForumId(this.filteredForums[i]).subscribe(
      d => {
        this.filteredForums[i].totalTopics = d.slice();
      },
      e => {
        console.log(e);
      }
    );
  }

  private getTopics() {
    for (let i = 0; i < this.filteredForums.length; i++) {
      this.getTopicsByForumId(i);
    }
  }

  private filterTopics(topics) {
    const tmp = [];
    for (let i = 0; topics && i < topics.length; i++) {
      if (topics[i].title.toUpperCase().includes(this.searchText.toUpperCase()) || this.searchText === '') {
        tmp.push(topics[i]);
      }
    }

    return tmp;
  }

  private updateFilteredTopics() {
    this.filteredTopics = this.filterTopics(this.filteredForums[this.currentForum].totalTopics);
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
    this.topicsService.addTopic({
      title: this.newTopicTitle,
      forumId: this.filteredForums[this.currentForum]._id
    }).subscribe(
      d => {
        this.newTopicTitle = '';
        this.postService.addPost({text: this.mainService.editor.getContent(), topicId: d.topic._id }).subscribe(
          d1 => {
            this.newTopicDescription = '';
            this.showTopicRequest = false;

            this.getTopics();
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

  private viewTopicList(idx) {
    this.searchText = '';
    this.currentForum = idx;
    this.updateFilteredTopics();
    this.isTopicList = true;
  }

  private viewForumList() {
    this.isTopicList = false;
    this.searchText = '';
    this.filterForums();
  }
}
