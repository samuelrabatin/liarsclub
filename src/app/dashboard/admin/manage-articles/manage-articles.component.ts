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
  private tmpArticles = [];
  private defaultOrders = [];

  private isAdd = false;

  private dragStartIdx;
  private curDragIdx;
  private prevDragidx;

  private setting = {
    _id: '',
    type: 'article',
    setting: {
      count: 5
    }
  };

  private orgSetting = {
    count: 0
  };

  constructor( private mainService: MainService, private articleService: ArticlesService, private router: Router ) { }

  ngOnInit() {
    this.getArticles();
    this.getArticleSetting();
  }

  private getArticles() {
    this.articleService.getArticles().subscribe(
      d => {
        if (d.type) {
          this.articles = d.data;
          this.tmpArticles = this.articles.slice();
          this.defaultOrders = this.articles.map((val, idx) => { return val.order; });
        } else {
          console.log(d.msg);
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private getArticleSetting() {
    this.articleService.getSettings().subscribe(
      d => {
        if (d.type) {
          this.setting = d.setting;
          this.orgSetting.count = d.setting.setting.count;
        }
      },
      e => {
        console.log(e);
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

  private saveSetting() {
    this.articleService.setSettings(this.setting).subscribe(
      d => {
        if (d.type) {
          this.getArticleSetting();
        }
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
    if (this.prevDragidx !== this.curDragIdx) {
      this.articles = this.tmpArticles.slice();

      this.articles.splice(this.dragStartIdx, 1);
      this.articles.splice(this.curDragIdx, 0, this.tmpArticles[this.dragStartIdx]);

      this.prevDragidx = this.curDragIdx;
    }
  }

  private dragEnd(idx) {
    for (let i = 0; i < this.articles.length; i++) {
      this.articles[i].order = this.defaultOrders[i];
    }
    this.tmpArticles = this.articles.slice();
    const start = this.getMin(this.dragStartIdx, this.curDragIdx);
    const end = this.getMax(this.dragStartIdx, this.curDragIdx);
    this.saveOrders(start, end);
  }

  private saveOrders(start, end) {
    for (let i = start; i <= end; i++) {
      this.articleService.updateArticle(this.articles[i]).subscribe();
    }
  }

  private orderChange(idx, evt) {
    if (idx + 1  !== Number.parseInt(evt.target.value)) {
      const start = idx;
      const end = Number.parseInt(evt.target.value) > this.articles.length ? this.articles.length : Number.parseInt(evt.target.value) - 1;
      this.articles = this.tmpArticles.slice();
      this.articles.splice(start, 1);
      this.articles.splice(end, 0, this.tmpArticles[start]);

      for (let i = 0; i < this.articles.length; i++) {
        this.articles[i].order = this.defaultOrders[i];
      }

      this.tmpArticles = this.articles.slice();
      this.saveOrders(this.getMin(start, end), this.getMax(start, end));
    }
  }

  private getMin(a, b) {
    return a > b ? b : a;
  }

  private getMax(a, b) {
    return a < b ? b : a;
  }
}
