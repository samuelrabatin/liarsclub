import { Component, OnInit, Input } from '@angular/core';

import { MainService } from '../../../services/main.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article;

  constructor( private mainService: MainService, private articleService: ArticlesService ) { }

  ngOnInit() {
  }

  private isLiked(idx) {
    return this.article.likedUsers.indexOf(this.mainService.userId) > -1;
  }

  private like(idx) {
    if (!this.isLiked(idx)) {
      this.article.likedUsers.push(this.mainService.userId);
    } else {
      this.article.likedUsers.splice(this.article.likedUsers.indexOf, 1);
    }

    this.articleService.updateArticle(this.article).subscribe(
      d => {
      },
      e => {
        console.log(e);
      }
    );
  }
}
