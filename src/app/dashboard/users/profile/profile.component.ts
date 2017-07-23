import { Component, OnInit, ViewChild } from '@angular/core';

import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

import { MainService } from '../../../services/main.service';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private firstName = '';
  private lastName = '';
  private email = '';
  private imgId = '';

  private orgFirstname = '';
  private orgLastname = '';
  private orgEmail = '';

  private uploader: CloudinaryUploader;
  private imgChanged = false;

  @ViewChild('avatar') private avatar;

  constructor( private mainService: MainService ) {
    this.uploader = new CloudinaryUploader(
      new CloudinaryOptions({
        cloudName: 'da2w1aszs',
        uploadPreset: 'hhfktgrl'
      })
    );

    this.uploader.onSuccessItem = ( item, response, status, headers) => {
      let img = JSON.parse(response);

      this.imgId = img.public_id;

      this.updateProfile();

      return {item, response, status, headers};
    };

    this.uploader.onErrorItem = ( item, response, status, headers) => {
      $.notify({
        icon: "notifications",
        message: "Image Upload Failed"
      },{
        type: 'success',
        timer: 3000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });

      return {item, response, status, headers};
    }
  }

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
          this.imgId = d.profile.imgId;
        }
      }
    );
  }

  private updateProfile() {
    const profile = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      imgId: this.imgId
    };

    this.mainService.saveProfile(profile).subscribe(
      d => {
        this.mainService.loading = false;
        this.orgFirstname = d.profile.firstname;
        this.orgLastname = d.profile.lastname;
        this.orgEmail = d.profile.email;
        this.imgChanged = false;
        this.mainService.avatarPublicId = d.profile.imgId;

        this.mainService.name = `${d.profile.firstname} ${d.profile.lastname}`;

        $.notify({
          icon: "notifications",
          message: d.msg
        },{
          type: 'success',
          timer: 3000,
          placement: {
            from: 'top',
            align: 'right'
          }
        });
      },
      e => {
        this.mainService.loading = false;
        console.log(e);
      }
    );
  }

  private saveProfile() {
    this.imgChanged ? this.uploader.uploadAll() : this.updateProfile();

    return false;
  }

}
