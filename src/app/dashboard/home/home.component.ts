import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';
import { ArticlesService } from '../../services/articles.service';

@Component({
    moduleId: module.id,
    selector: ' app-home-cmp ',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    public userLoggedIn: Boolean = true;

    private articles = [];

    constructor( private mainService: MainService, private articleService: ArticlesService ) {

    }

    ngOnInit() {
      this.articleService.getArticles().subscribe(
        d => {
          this.articles = d.data.slice(0, 5);
        },
        e => {

        }
      );
    }

}
