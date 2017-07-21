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

  private orgFirstname = '';
  private orgLastname = '';
  private orgEmail = '';

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    this.mainService.getProfileData().subscribe(
      d => {
        this.mainService.loading = false;
        if (d.type) {
          this.orgFirstname = d.profile.firstname;
          this.orgLastname = d.profile.lastname;
          this.orgEmail = d.profile.email;

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
        this.mainService.loading = false;
        this.orgFirstname = d.profile.firstname;
        this.orgLastname = d.profile.lastname;
        this.orgEmail = d.profile.email;
        console.log(d);
      },
      e => {
        this.mainService.loading = false;
        console.log(e);
      }
    );

    return false;
  }

}
