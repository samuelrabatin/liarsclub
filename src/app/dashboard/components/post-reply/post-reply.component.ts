import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostsService } from 'app/services/posts.service';

declare var tinymce: any;

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {
  @Input('topic') topic;
  @Output() replied: EventEmitter<string> = new EventEmitter();

  private editor;

  constructor( private postService: PostsService ) { }

  ngOnInit() {
    tinymce.init({
      selector: 'textarea',
      plugins: [
        'link image hr anchor pagebreak',
        'searchreplace wordcount code fullscreen',
        'insertdatetime media table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
      ],
      toolbar1: 'undo redo | insert | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link',
      toolbar2: 'forecolor backcolor emoticons | codesample | createspan removespan',
      menubar: 'edit insert view format table tools',
      relative_urls: false,
      document_base_url: 'assets/js/plugins/tinymce/',
      skin_url: 'skins/lightgray',
      branding: false,
      setup: editor => {
        this.editor = editor;
      },
    });
  }

  private reply() {
    this.postService.addPost({text: this.editor.getContent(), topicId: this.topic._id}).subscribe(
      d => {
        if (d.type) {
          this.replied.emit('replied');
          this.editor.setContent('');
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
