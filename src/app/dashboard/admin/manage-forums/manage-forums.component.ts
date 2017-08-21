import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-manage-forums',
  templateUrl: './manage-forums.component.html',
  styleUrls: ['./manage-forums.component.css']
})
export class ManageForumsComponent implements OnInit {
  private currentForums = [];

  @ViewChild('forumsList') forumsListComponent;
  @ViewChild('topicsList') topicsListComponent;
  @ViewChild('postsList') postsListComponent;
  @ViewChild('reportedpostsList') reportedpostsListComponent;

  @ViewChild('forumsListToggleButton') forumsListToggleButton;
  @ViewChild('topicsListToggleButton') topicsListToggleButton;
  @ViewChild('postsListToggleButton') postsListToggleButton;
  @ViewChild('reportedpostsListToggleButton') reportedpostsListToggleButton;

  @ViewChild('forumsListTab') forumsListTab;
  @ViewChild('topicsListTab') topicsListTab;
  @ViewChild('postsListTab') postsListTab;
  @ViewChild('reportedpostsListTab') reportedpostsListTab;

  constructor( private mainService: MainService ) { }

  ngOnInit() {
  }

  private gotoTopic(idx) {
    this.currentForums = [this.forumsListComponent.forums[idx]];
    this.topicsListComponent.updateForum(this.forumsListComponent.forums[idx]._id);

    this.topicsListToggleButton.nativeElement.setAttribute('aria-expanded', true);
    this.forumsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
    this.postsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
    this.reportedpostsListToggleButton.nativeElement.setAttribute('aria-expanded', false);

    if (!this.topicsListTab.nativeElement.className.includes(' active')) {
      this.topicsListTab.nativeElement.className += ' active';
      this.topicsListToggleButton.nativeElement.parentElement.className = 'active';
    }
    this.forumsListTab.nativeElement.className = this.topicsListTab.nativeElement.className.replace(' active', '');
    this.forumsListToggleButton.nativeElement.parentElement.className = '';
    this.postsListTab.nativeElement.className = this.postsListTab.nativeElement.className.replace(' active', '');
    this.postsListToggleButton.nativeElement.parentElement.className = '';
    this.reportedpostsListTab.nativeElement.className = this.reportedpostsListTab.nativeElement.className.replace(' active', '');
    this.reportedpostsListToggleButton.nativeElement.parentElement.className = '';
  }

  private gotoPosts(topic) {
    this.postsListComponent.changeTopic(topic);

    this.topicsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
    this.forumsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
    this.reportedpostsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
    this.postsListToggleButton.nativeElement.setAttribute('aria-expanded', true);

    if (!this.postsListTab.nativeElement.className.includes(' active')) {
      this.postsListTab.nativeElement.className += ' active';
      this.postsListToggleButton.nativeElement.parentElement.className = 'active';
    }
    this.forumsListTab.nativeElement.className = this.topicsListTab.nativeElement.className.replace(' active', '');
    this.forumsListToggleButton.nativeElement.parentElement.className = '';
    this.topicsListTab.nativeElement.className = this.postsListTab.nativeElement.className.replace(' active', '');
    this.topicsListToggleButton.nativeElement.parentElement.className = '';
    this.reportedpostsListTab.nativeElement.className = this.reportedpostsListTab.nativeElement.className.replace(' active', '');
    this.reportedpostsListToggleButton.nativeElement.parentElement.className = '';
  }

  private topicUpdated() {
    this.forumsListComponent.getForumData();
  }

  private postUpdated() {
    this.forumsListComponent.getForumData();
    this.topicsListComponent.getTopicData();
  }
}
