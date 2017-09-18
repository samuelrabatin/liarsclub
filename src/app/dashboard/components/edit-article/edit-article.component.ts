import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../../../services/articles.service';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  private articleId = '';
  private article = {
    title: '',
    text: '',
    featuredImage: ''
  };

  private orgArticle = {
    title: '',
    text: '',
    featuredImage: ''
  };

  private imgChanged = false;

  constructor( private route: ActivatedRoute, private articleService: ArticlesService, private mainService: MainService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id']; // (+) converts string 'id' to a number
      this.getArticle();
    });

  }

  private getArticle() {
    this.articleService.getArticleById(this.articleId).subscribe(
      d => {
        if (d.type) {
          this.mainService.initTinyMCE();
          this.article = d.article;
          this.orgArticle = {
            title: d.article.title,
            text: d.article.text,
            featuredImage: d.article.featuredImage
          };

          this.mainService.editor.setContent(this.article.text);
          this.imgChanged = false;
        } else {
        }
      }
    );
  }

  private articleChanged() {
    return this.article.title !== ''
      && (this.orgArticle.featuredImage !== this.article.featuredImage
      || this.orgArticle.title !== this.article.title
      || this.orgArticle.text !== this.mainService.editor.getContent()
      || this.imgChanged);
  }

  private imgUploaded(imgId) {
    this.article.featuredImage = imgId;
    this.imgChanged = true;
  }

  private saveArticle() {
    this.article.text = this.mainService.editor.getContent();

    this.articleService.updateArticle(this.article).subscribe(
      d => {
        this.getArticle();
      },
      e => {
        console.log(e);
      }
    );
  }
}
