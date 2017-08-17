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

  @ViewChild('forumsListToggleButton') forumsListToggleButton;
  @ViewChild('topicsListToggleButton') topicsListToggleButton;
  @ViewChild('postsListToggleButton') postsListToggleButton;

  @ViewChild('forumsListTab') forumsListTab;
  @ViewChild('topicsListTab') topicsListTab;
  @ViewChild('postsListTab') postsListTab;

  constructor( private mainService: MainService ) { }

  ngOnInit() {
  }

  private gotoTopic(idx) {
    this.currentForums = [this.forumsListComponent.forums[idx]];
    this.topicsListComponent.updateForum(this.forumsListComponent.forums[idx]._id);

    this.topicsListToggleButton.nativeElement.setAttribute('aria-expanded', true);
    this.forumsListToggleButton.nativeElement.setAttribute('aria-expanded', false);
    this.postsListToggleButton.nativeElement.setAttribute('aria-expanded', false);

    if (!this.topicsListTab.nativeElement.className.includes(' active')) {
      this.topicsListTab.nativeElement.className += ' active';
      this.topicsListToggleButton.nativeElement.parentElement.className = 'active';
    }
    this.forumsListTab.nativeElement.className = this.topicsListTab.nativeElement.className.replace(' active', '');
    this.forumsListToggleButton.nativeElement.parentElement.className = '';
    this.postsListTab.nativeElement.className = this.postsListTab.nativeElement.className.replace(' active', '');
    this.postsListToggleButton.nativeElement.parentElement.className = '';
  }

  private topicUpdated() {
    this.forumsListComponent.getForumData();
  }
}
