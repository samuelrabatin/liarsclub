import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MainService } from '../../../../services/main.service';

import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

import initDateTimePicker = require('../../../../../assets/js/init/initDatetimepickers');

declare var $: any;
declare var window: any;
declare var google: any;

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {
  private imgChanged = false;

  private club: any;

  private uploader: CloudinaryUploader;

  @Output() clubAdded: EventEmitter<string> = new EventEmitter();

  constructor(private mainService: MainService) {
    window.addClubComponent = this;

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
  }

  ngOnInit() {
    const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    const mapOptions = {
      zoom: 8,
      center: myLatlng,
      scrollwheel: true
    };

    const map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);

    map.addListener('click', this.mapLocationChange);

    const marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Regular Map!'
    });

    marker.setMap(map);

    $('.selectpicker').selectpicker();
    initDateTimePicker();
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

          const map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
          map.addListener('click', window.addClubComponent.mapLocationChange);

          marker.setMap(map);
        } else {
          console.log('results not found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }

  private save() {
    console.log(this.club);

    this.mainService.addClub(this.club).subscribe(
      d => {
        this.mainService.loading = false;

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
        this.clubAdded.emit('club added');
      },
      e => {
        this.mainService.loading = false;
        console.log(e);
      }
    );

    return false;
  }

  addClub(evt) {
    if (this.imgChanged) {
      this.uploader.uploadAll();
    } else {
      this.save();
    }

    return false;
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
          scrollwheel: true
        };

        const map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
        map.addListener('click', window.addClubComponent.mapLocationChange);

        marker.setMap(map);
      } else {
      }
    });
  }

  private timeChanged(evt) {
    this.club.time = evt.target.value;
  }
}
