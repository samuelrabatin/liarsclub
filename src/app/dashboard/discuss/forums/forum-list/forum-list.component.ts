import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {
  private forums;

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    this.getForums();
  }

  private getForums() {
    this.mainService.getConfirmedForums().subscribe(
      d => {
        this.forums = d;
      },
      e => {
        console.log(e);
      }
    );
  }
}
