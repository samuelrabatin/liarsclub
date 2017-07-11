import { Component, OnInit, Input } from '@angular/core';

declare var swal:any;

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  @Input() club;

  constructor() { }

  ngOnInit() {

  }

  private editClick() {
    swal({
      confirmButtonText: 'Tag myself with this club',
      confirmButtonClass: "btn btn-success",
      html: `
        <h2>${this.club.title}</h2>
        <p>${this.club.location}</p>
      `,
      buttonsStyling: false
    }).then(function() {

    });
  }
}
