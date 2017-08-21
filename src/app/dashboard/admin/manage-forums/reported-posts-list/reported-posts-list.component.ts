import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PostsService } from '../../../../services/posts.service';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-reported-posts-list',
  templateUrl: './reported-posts-list.component.html',
  styleUrls: ['./reported-posts-list.component.css']
})
export class ReportedPostsListComponent implements OnInit {
  private posts;
  private userNames = [];

  private showDiag = false;
  private diagBackgroundStyle: any = {};
  private diagStyle: any = {};
  private curPost;
  private curReportedPost;

  private loading = false;

  @Output() deleted: EventEmitter<string> = new EventEmitter();

  constructor( private mainService: MainService, private postsService: PostsService ) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.getUserName();
    this.postsService.getReportedPosts().subscribe(
      d => {
        this.posts = d;
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

  private showDiagToggle(post) {
    this.postsService.getPostById(post.postId).subscribe(
      d => {
        if (d.type) {
          this.curPost = d.data;
          this.curReportedPost = post;
          this.showDiag = true;
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
            'width': '600px',
            'position': 'fixed',
            'left': 'calc(50% - 250px)',
            'top': `calc(${(scroll ? scroll.style.top : document.querySelector('.perfect-scrollbar-off .main-panel').scrollTop + 'px')} + 50% - 350px)`
          };
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private hideDiag() {
    this.showDiag = false;
  }

  private deletePost(id) {
    this.postsService.deletePost(this.curPost._id).subscribe(
      d => {
        if (d.type) {
          this.deleted.emit('deleted');
          if (this.loading) {
            this.getData();
            this.loading = false;
            this.showDiag = false;
          } else {
            this.loading = true;
          }
        }
      },
      e => {
        console.log(e);
      }
    );
    this.postsService.deleteReportedPost(this.curReportedPost._id).subscribe(
      d => {
        if (d.type) {
          this.deleted.emit('deleted');
          if (this.loading) {
            this.getData();
            this.loading = false;
            this.showDiag = false;
          } else {
            this.loading = true;
          }
        }
      },
      e => {
        console.log(e);
      }
    );
  }
}
