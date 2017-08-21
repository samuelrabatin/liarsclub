import { Component, OnInit } from '@angular/core';

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
}
