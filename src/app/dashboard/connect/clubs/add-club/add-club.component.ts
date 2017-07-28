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
  @ViewChild('clubName') clubName;
  @ViewChild('clubAddress') clubAddress;
  @ViewChild('clubImg') clubImg;
  @ViewChild('irregulary') irregulary;
  @ViewChild('regularly') regularly;
  @ViewChild('repeatPeriod') repeatPeriod;
  @ViewChild('repeatType') repeatType;
  @ViewChild('dayOfWeek') dayOfWeek;
  @ViewChild('time') time;
  @ViewChild('phsicalLocation') phsicalLocation;
  @ViewChild('email') email;
  @ViewChild('websiteLink') websiteLink;
  @ViewChild('facebookLink') facebookLink;

  private imgUrl;
  private imgChanged = false;

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

      this.imgUrl = img.public_id;

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
    const club = {
      title: this.clubName.nativeElement.value,
      address: this.clubAddress.nativeElement.value,
      type: this.regularly.nativeElement.checked ? 'Regularly' : 'Irreglarly',
      imgUrl: this.imgUrl,
      regularType: this.repeatType.nativeElement.value,
      regularPeriod: this.repeatPeriod.nativeElement.value,
      dayOfWeek: this.dayOfWeek.nativeElement.value,
      time: this.time.nativeElement.value,
      starting: this.time.nativeElement.value,
      location: this.phsicalLocation.nativeElement.value,
      activeMembers: 0,
      pastMembers: 0
    };

    const requireInputs = $('input,select').filter('[required]:visible');
    requireInputs.map((index, val) => {
      $(val).val() === '' ? $(val).parent().addClass('has-error') : $(val).parent().removeClass('has-error');
    });

    if ($('.has-error').length === 0) {
      this.mainService.addClub(club).subscribe(
        d => {
          this.mainService.loading = false;
          this.clubAdded.emit('club added');
        },
        e => {
          this.mainService.loading = false;
          console.log(e);
        }
      );
    }

    return false;
  }

  addClub(evt) {
    if (this.imgChanged) {
      console.log('ch');
      this.uploader.uploadAll();
    } else {
      console.log('unch')
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
}
