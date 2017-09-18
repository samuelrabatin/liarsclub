import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '../../../services/main.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article;
  @Input() shortform;

  private articleId = '';

  private updating = false;

  constructor( private mainService: MainService, private articleService: ArticlesService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id']; // (+) converts string 'id' to a number

      if (this.articleId) {
        this.articleService.getArticleById(this.articleId).subscribe(
          d => {
            this.article = d.article;
          },
          e => {
            console.log(e);
          }
        );
      }
    });
  }

  private isLiked(idx) {
    return this.article.likedUsers.indexOf(this.mainService.userId) > -1;
  }

  private like(idx) {
    if (this.updating) {
      return;
    }

    this.updating = true;

    if (!this.isLiked(idx)) {
      this.article.likedUsers.push(this.mainService.userId);
    } else {
      this.article.likedUsers.splice(this.article.likedUsers.indexOf(this.mainService.userId), 1);
    }

    this.articleService.updateArticle(this.article).subscribe(
      d => {
        this.updating = false;
      },
      e => {
        console.log(e);
      }
    );
  }
}
