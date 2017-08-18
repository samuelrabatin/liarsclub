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
  private topicId;

  constructor( private route: ActivatedRoute, private router: Router,
       private mainService: MainService, private topicsService: TopicsService, private postService: PostsService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topicId = params['id'];

      if (this.topicId) {
        this.getData();
        this.topicsService.increaseView(this.topicId).subscribe(
          d => {
            if (d.type === false) {
              console.log(d);
            }
          },
          e => {
            console.log(e);
          }
        );
      }
    });
  }

  private getData() {
    this.topicsService.getTopicById(this.topicId).subscribe(
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

    this.postService.getPostsByTopicId(this.topicId).subscribe(
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
  }
}
