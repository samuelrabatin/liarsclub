import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../../../services/main.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.css']
})
export class ManageArticlesComponent implements OnInit {
  private articles = [];

  private isAdd = false;

  private dragStartIdx;
  private curDragIdx;

  constructor( private mainService: MainService, private articleService: ArticlesService, private router: Router ) { }

  ngOnInit() {
    this.getArticles();
  }

  private getArticles() {
    this.articleService.getArticles().subscribe(
      d => {
        if (d.type) {
          this.articles = d.data;
        } else {
          console.log(d.msg);
        }
      }
    );
  }

  private addArticle(article) {
    this.articleService.addArticle(article).subscribe(
      d => {
        this.getArticles();
        this.isAdd = false;
      },
      e => {
        console.log(e);
        this.isAdd = false;
      }
    );
  }

  private removeArticle(idx) {
    this.articleService.removeArticleById(this.articles[idx]._id).subscribe(
      d => {
        this.getArticles();
      },
      e => {
        console.log(e);
      }
    );
  }

  private showAddDiag() {
    this.isAdd = true;
  }

  private dragStart(idx) {
    this.dragStartIdx = idx;
  }

  private dragEnter(idx) {
    this.curDragIdx = idx;
  }

  private dragEnd(idx) {
    if (this.curDragIdx !== this.dragStartIdx) {
      [this.articles[this.curDragIdx], this.articles[this.dragStartIdx]]
        = [this.articles[this.dragStartIdx], this.articles[this.curDragIdx]];
      const tmpOrder = this.articles[this.curDragIdx].order;
      this.articles[this.curDragIdx].order = this.articles[this.dragStartIdx].order;
      this.articles[this.dragStartIdx].order = tmpOrder;

      this.articleService.updateArticle(this.articles[this.curDragIdx]).subscribe();
      this.articleService.updateArticle(this.articles[this.dragStartIdx]).subscribe();
    }
  }
}
