import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PostsService } from 'app/services/posts.service';

declare var tinymce: any;
declare var $: any;

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
    const me = this;

    tinymce.init({
      selector: '.tinymce-editor',
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
      image_advtab: true,
      file_picker_callback: function(callback, value, meta) {
        if (meta.filetype === 'image') {
          $('#upload').trigger('click');
          $('#upload').on('change', function(evt) {
            me.readFile(callback, evt.target);
          });
        }
      },
      paste_data_images: true,
      setup: editor => {
        this.editor = editor;
      },
    });
  }

  private readFile(callback, inputFile) {
    const file: File = inputFile.files[0];
    const myReader: FileReader = new FileReader();

    console.log(inputFile);

    myReader.onloadend = function(e) {
    };

    myReader.onload = function(e: any) {
      callback(e.target.result, {
        alt: ''
      });
    };

    myReader.readAsDataURL(file);
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
