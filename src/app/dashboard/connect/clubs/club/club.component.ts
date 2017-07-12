import { Component, OnInit, Input } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  @Input() club;

  private showDiag:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private editClick() {
    this.showDiag = true;
  }

  private confirm() {
    this.showDiag = false;
  }

  private cancel() {
    this.showDiag = false;
  }
}
