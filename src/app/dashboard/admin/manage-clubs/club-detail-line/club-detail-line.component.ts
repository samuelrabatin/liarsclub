import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-club-detail-line',
  templateUrl: './club-detail-line.component.html',
  styleUrls: ['./club-detail-line.component.css']
})
export class ClubDetailLineComponent implements OnInit {
  @Input('club') club;

  constructor() { }

  ngOnInit() {
  }

}
