import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MainService } from '../../../../services/main.service';
import { PostsService } from '../../../../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input('post') post;
  @Output() updated: EventEmitter<string> = new EventEmitter();

  private profile;

  constructor( private mainService: MainService, private postService: PostsService ) { }

  ngOnInit() {
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
    this.postService.dislikePost(this.post._id).subscribe(
      d => {
        if (d.type) {
          this.removeLike();
        }
      }
    );
  }

  private removeDislike() {
    this.postService.removeDislikePost(this.post._id).subscribe(
      d => {
        if (d.type) {
          this.updated.emit('udpated');
        }
      }
    );
  }

  private like() {
    this.postService.likePost(this.post._id).subscribe(
      d => {
        if (d.type) {
          this.removeDislike();
        }
      }
    );
  }

  private removeLike() {
    this.postService.removeLikePost(this.post._id).subscribe(
      d => {
        if (d.type) {
          this.updated.emit('udpated');
        }
      }
    );
  }
}
