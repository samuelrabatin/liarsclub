import { Component, OnInit } from '@angular/core';

import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private firstName = '';
  private lastName = '';
  private email = '';

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    this.mainService.getProfileData().subscribe(
      d => {
        if (d.type) {
          this.firstName = d.profile.firstname;
          this.lastName = d.profile.lastname;
          this.email = d.profile.email;
        }
      }
    );
  }

  private saveProfile() {
    const profile = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email
    };

    this.mainService.saveProfile(profile).subscribe(
      d => {
        console.log(d);
      },
      e => {
        console.log(e);
      }
    );

    return false;
  }

}
