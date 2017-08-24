import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostsService } from 'app/services/posts.service';
import { MainService } from 'app/services/main.service';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {
  @Input('topic') topic;
  @Output() replied: EventEmitter<string> = new EventEmitter();

  constructor( private postService: PostsService, private mainService: MainService ) { }

  ngOnInit() {
    this.mainService.initTinyMCE();
  }

  private reply() {
    this.postService.addPost({text: this.mainService.editor.getContent(), topicId: this.topic._id}).subscribe(
      d => {
        if (d.type) {
          this.replied.emit('replied');
          this.mainService.editor.setContent('');
        } else {
          console.log(d);
        }
      },
      e => {
        console.log(e);
      }
    );
  }
}
