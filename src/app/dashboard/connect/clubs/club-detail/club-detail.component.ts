import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../../../services/main.service';
import { StorageService } from '../../../../services/storage.service';

import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

declare var $: any;
declare var window: any;
declare var google: any;


@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit, AfterViewChecked {
  private clubId;
  private club;
  private orgClub;
  private clubTag;
  private upcomingEvents;
  private orgUpcomingEvents;
  private pastEvents;

  private eventChanged;
  private imgChanged;

  private canEdit: Boolean = false;
  private uploader: CloudinaryUploader;

  private weeksSelectOption: IMultiSelectOption[];
  private selectSettings: IMultiSelectSettings;

  private regularTypeSelectOption: IMultiSelectOption[];
  private regularTypeSettings: IMultiSelectSettings;

  constructor(private mainService: MainService, private storageService: StorageService,
              private router: Router, private route: ActivatedRoute) {

    window.editClubComponent = this;

    this.uploader = new CloudinaryUploader(
      new CloudinaryOptions({
        cloudName: this.mainService.cloudName,
        uploadPreset: this.mainService.cloudinaryUploadPresets.clubs
      })
    );

    this.uploader.onSuccessItem = ( item, response, status, headers) => {
      const img = JSON.parse(response);

      this.club.imgUrl = img.public_id;

      return {item, response, status, headers};
    };

    this.uploader.onCompleteAll = () => {
      this.save();
    };

    this.uploader.onErrorItem = ( item, response, status, headers) => {
      $.notify({
        icon: 'notifications',
        message: 'Image Upload Failed'
      }, {
        type: 'success',
        timer: 3000,
        placement: {
          from: 'top',
          align: 'right'
        }
      });
    };
  }

  ngOnInit() {
    this.selectSettings = {
      checkedStyle: 'fontawesome',
      containerClasses: '',
      buttonClasses: 'btn-group select-with-transition form-control text-left',
      itemClasses: 'w-100',
      dynamicTitleMaxItems: 7
    };

    this.weeksSelectOption = [
      { id: 'Monday', name: 'Monday' },
      { id: 'Tuesday', name: 'Tuesday' },
      { id: 'Wednesday', name: 'Wednesday' },
      { id: 'Thursday', name: 'Thursday' },
      { id: 'Friday', name: 'Friday' },
      { id: 'Saturday', name: 'Saturday' },
      { id: 'Sunday', name: 'Sunday' },
    ];

    this.regularTypeSettings = {
      checkedStyle: 'fontawesome',
      containerClasses: '',
      buttonClasses: 'btn-group select-with-transition form-control text-left',
      itemClasses: 'w-100',
      dynamicTitleMaxItems: 3,
      selectionLimit: 1,
      autoUnselect: true,
      closeOnSelect: true
    };

    this.regularTypeSelectOption = [
      { id: 'weeks', name: 'Weeks' },
      { id: 'months', name: 'Months' }
    ];

    this.canEdit = this.mainService.userRole === 'admin';
    this.imgChanged = false;
    this.eventChanged = false;

    this.club = {
      title: '',
      address: '',
      type: '',
      imgUrl: '',
      regularType: '',
      regularPeriod: '',
      dayOfWeek: '',
      time: '',
      starting: '',
      location: '',
      email: '',
      websiteLink: '',
      facebookLink: ''
    };


    this.route.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number
      this.clubId = id;
      this.getClub();
    });
  }

  ngAfterViewChecked() {
    if (this.club) {
      $('.club-detail-selectpicker').selectpicker();

      $('.club-detail-timepicker').datetimepicker({
        format: 'h:mm A',
        icons: {
          time: 'fa fa-clock-o',
          date: 'fa fa-calendar',
          up: 'fa fa-chevron-up',
          down: 'fa fa-chevron-down',
          previous: 'fa fa-chevron-left',
          next: 'fa fa-chevron-right',
          today: 'fa fa-screenshot',
          clear: 'fa fa-trash',
          close: 'fa fa-remove',
          inline: true
        }
      });
    }
  }

  private getClub() {
    this.mainService.getClubById(this.clubId).subscribe(
      d => {
        if (d.type) {
          this.club = d.club;
          this.orgClub = {};
          const keys = Object.keys(this.club);
          for (const key of keys) {
            this.orgClub[key] = this.club[key];
          }

          const taggedUserNames = this.club.taggedUsers.map((val, index) => {
            return val.user;
          });
          const tagIdx = taggedUserNames.indexOf(this.mainService.username);
          if (tagIdx > -1) {
            this.clubTag = this.club.taggedUsers[tagIdx];
            this.canEdit = this.clubTag.memberType === 'admin';
          }

          this.canEdit = this.canEdit || this.mainService.userRole === 'admin';

          this.upcomingEvents = [];
          this.orgUpcomingEvents = [];
          this.pastEvents = [];

          if (this.club.events) {
            for (const event of this.club.events) {
              const eventDate = new Date(event.date);
              let today = new Date();
              today = new Date(today.toUTCString());
              if (today.getTime() < eventDate.getTime()) {
                event.defaultEvt = true;
                this.upcomingEvents.push(event);

                this.orgUpcomingEvents.push({
                  title: event.title,
                  date: event.date,
                  location: event.location,
                  imgUrl: event.imgUrl,
                  description: event.description,
                });
              } else {
                this.pastEvents.push(event);
              }
            }
          }

          const geocoder = new google.maps.Geocoder;
          geocoder.geocode({'address': this.club.address}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              const myLatlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());

              const mapOptions = {
                zoom: 8,
                center: myLatlng,
                scrollwheel: true,
                fullscreenControl: false
              };

              let map;

              if (document.getElementById('regularMap')) {
                map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
                map.addListener('click', window.editClubComponent.mapLocationChange);
              } else {
                map = new google.maps.Map(document.getElementById('regularMap1'), mapOptions);
              }

              const marker = new google.maps.Marker({
                position: myLatlng,
                title: 'Regular Map!'
              });

              marker.setMap(map);
            }
          });
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  private save() {
    this.club.events = this.upcomingEvents.slice();
    this.mainService.updateClub(this.club).subscribe(
      d => {
        if (d.type) {
          this.imgChanged = false;
          this.getClub();
        }
      },
      e => {
        this.mainService.loading = false;
        console.log(e);
      }
    );

    return false;
  }

  saveClub(evt) {
    if (this.imgChanged) {
      this.uploader.uploadAll();
    } else {
      this.save();
    }

    return false;
  }

  private timeChanged(evt) {
    this.club.time = evt.target.value;
  }

  private isNotChanged() {
    let flag = !this.imgChanged;
    const keys = Object.keys(this.club);

    for (const key of keys) {
      flag = flag && this.club[key] === this.orgClub[key];
    }

    if ($('.event-container.has-error').length === 0) {
      flag = flag && this.upcomingEvents.length === this.orgUpcomingEvents.length;
      for (let i = 0; i < this.upcomingEvents.length; i++) {
         flag = flag && this.upcomingEvents[i].title === this.orgUpcomingEvents[i].title
          && this.upcomingEvents[i].date === this.orgUpcomingEvents[i].date
          && this.upcomingEvents[i].description === this.orgUpcomingEvents[i].description
          && this.upcomingEvents[i].location === this.orgUpcomingEvents[i].location
          && this.upcomingEvents[i].imgUrl === this.orgUpcomingEvents[i].imgUrl;
      }
    }

    return flag;
  }

  private addEvent() {
    const newEvent = {
      title: '',
      date: '',
      location: '',
      imgUrl: '',
      description: '',
      notificationText: '',
      createdUserId: this.mainService.userId,
      createdDate: new Date()
    };

    this.upcomingEvents.push(newEvent);
  }

  private eventUpdated(evt, newEvt) {
    evt = newEvt;
    this.eventChanged = true;
  }

  private removeEvent(idx) {
    this.upcomingEvents.splice(idx, 1);
  }

  mapLocationChange(e) {
    const geocoder = new google.maps.Geocoder;

    geocoder.geocode({'location': e.latLng}, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
          const myLatlng = e.latLng;
          const marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Regular Map!'
          });

          const mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: true
          };

          $('#clubAddress').val(results[1].formatted_address);
          $('#clubAddress').parent().removeClass('is-empty');
          $('#clubAddress').parent().removeClass('has-error');

          const map = document.getElementById('regularMap') ?
            new google.maps.Map(document.getElementById('regularMap'), mapOptions) :
            new google.maps.Map(document.getElementById('regularMap1'), mapOptions);

          map.addListener('click', window.editClubComponent.mapLocationChange);

          marker.setMap(map);
        } else {
          console.log('results not found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }

  locationChange(evt) {
    const geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': evt.target.value }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        const myLatlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        const marker = new google.maps.Marker({
          position: myLatlng,
          title: 'Regular Map!'
        });

        const mapOptions = {
          zoom: 8,
          center: myLatlng,
          scrollwheel: true,
          fullscreenControl: false
        };

        const map = document.getElementById('regularMap') ?
          new google.maps.Map(document.getElementById('regularMap'), mapOptions) :
          new google.maps.Map(document.getElementById('regularMap1'), mapOptions);

        map.addListener('click', window.editClubComponent.mapLocationChange);

        marker.setMap(map);
      } else {
      }
    });
  }
}
