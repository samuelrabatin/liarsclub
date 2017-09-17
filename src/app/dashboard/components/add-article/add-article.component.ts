import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MainService } from '../../../services/main.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  private title = '';
  private imgChanged = false;
  private imgId = '';

  @Output() add: EventEmitter<object> = new EventEmitter();
  @Output() close: EventEmitter<string> = new EventEmitter();

  constructor( private mainService: MainService, private articleService: ArticlesService ) { }

  ngOnInit() {
    this.mainService.initTinyMCE();
  }

  private addArticle() {
    this.add.emit({
      title: this.title,
      text: this.mainService.editor.getContent(),
      featuredImage: this.imgId
    });
    this.title = '';
    this.mainService.editor.setContent('');
  }

  private closeArticle() {
    this.close.emit('close');
    this.title = '';
    this.mainService.editor.setContent('');
  }

  private imgUploaded(imgId) {
    this.imgId = imgId;
  }
}
