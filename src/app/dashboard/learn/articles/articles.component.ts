import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../services/main.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  moduleId: module.id,
  selector: ' app-articles-cmp ',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.css']
})

export class ArticlesComponent implements OnInit {
  private articles;

  constructor( private mainService: MainService, private articleService: ArticlesService ) {}

  ngOnInit() {
    this.getArticles();
  }

  private getArticles() {
    this.articleService.getArticles().subscribe(
      d => {
        this.articles = d.data;
      },
      e => {
        console.log(e);
      }
    );
  }
}
