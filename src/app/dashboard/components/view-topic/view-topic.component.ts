import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MainService } from '../../../services/main.service';
import { TopicsService } from '../../../services/topics.service';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-view-topic',
  templateUrl: './view-topic.component.html',
  styleUrls: ['./view-topic.component.css']
})
export class VIewTopicComponent implements OnInit {
  private topic;
  private posts;

  constructor( private route: ActivatedRoute, private router: Router,
       private mainService: MainService, private topicsService: TopicsService, private postService: PostsService ) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.topicsService.getTopicById(id).subscribe(
        d => {
          if (d.type) {
            this.topic = d.data;
          } else {
            console.log(d.msg);
          }
        },
        e => {
          console.log(e);
        }
      );

      this.postService.getPostsByTopicId(id).subscribe(
        d => {
          if (d.type) {
            this.posts = d.data;
          } else {
            console.log(d.msg);
          }
        },
        e => {
          console.log(e);
        }
      );

      this.mainService.getUserName();
    });
  }
}
