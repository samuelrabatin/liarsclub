import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as copy from 'copy-to-clipboard';

import { MainService } from '../../../../services/main.service';
import { PostsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input('post') post;
  @Input('isReported') isReported;
  @Output() updated: EventEmitter<string> = new EventEmitter();
  @Output() quoted: EventEmitter<string> = new EventEmitter();

  private profile;
  private showReport = false;
  private reportText = '';
  private postHTML: SafeHtml;

  private diagBackgroundStyle: any = {};
  private diagStyle: any = {};

  constructor( private mainService: MainService, private postService: PostsService, private satizer: DomSanitizer ) { }

  ngOnInit() {
    this.postHTML = this.satizer.bypassSecurityTrustHtml(this.post.text);
    this.mainService.getUserProfileById(this.post.createdUserId).subscribe(
      d => {
        if (d.type) {
          this.profile = d.profile;
        } else {
          console.log(d.msg);
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private isLike() {
    return this.post.likeUsersId.indexOf(this.mainService.userId) > -1;
  }

  private isUnLike() {
    return this.post.unlikeUsersId.indexOf(this.mainService.userId) > -1;
  }

  private dislike() {
    if (this.post.createdUserId !== this.mainService.userId) {
      this.postService.dislikePost(this.post._id).subscribe(
        d => {
          if (d.type) {
            this.removeLike();
          }
        },
        e => {
          console.log(e);
        }
      );
    }
  }

  private removeDislike() {
    this.postService.removeDislikePost(this.post._id).subscribe(
      d => {
        if (d.type) {
          this.updated.emit('udpated');
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private like() {
    if (this.post.createdUserId !== this.mainService.userId) {
      this.postService.likePost(this.post._id).subscribe(
        d => {
          if (d.type) {
            this.removeDislike();
          }
        },
        e => {
          console.log(e);
        }
      );
    }
  }

  private removeLike() {
    this.postService.removeLikePost(this.post._id).subscribe(
      d => {
        if (d.type) {
          this.updated.emit('udpated');
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private reportDiagToggle() {
    this.showReport = true;
    if (this.showReport) {
      this.diagBackgroundStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': (document.getElementsByClassName('main-content')[0].getClientRects()[0].height + 500) + 'px',
        'z-index': 11,
        'top': 0,
        'left': 0,
        'background': 'rgba(255, 0, 0, 0.1)'
      };

      const scroll: any = document.getElementsByClassName('ps-scrollbar-y-rail')[1];
      this.diagStyle = {
        'width': '500px',
        'position': 'fixed',
        'left': 'calc(50% - 250px)',
        'top': `calc(${(scroll ? scroll.style.top : document.querySelector('.perfect-scrollbar-off .main-panel').scrollTop + 'px')} + 50% - 200px)`
      };
    }
  }

  private report() {
    this.postService.reportPost(this.post._id, this.reportText).subscribe(
      d => {
        if (d.type) {
          this.updated.emit('udpated');
        }
      },
      e => {
        console.log(e);
      }
    );
    this.showReport = false;
  }

  private hideDiag() {
    this.showReport = false;
  }

  private quote() {
    const quoteString = `<blockquote>
      "${this.post.text}"
      <p style="font-style: italic">${this.mainService.userDisplayNames[this.post.createdUserId]}</p>
    </blockquote>`;
    copy(quoteString);

    this.mainService.editor.execCommand('mceInsertContent', false, quoteString);
    this.quoted.emit(quoteString);
  }
}
