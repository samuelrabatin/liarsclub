import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../../../services/main.service';

import initDateTimePicker = require('../../../../../assets/js/init/initDatetimepickers');

declare var $:any;
declare var google:any;

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

  constructor(private mainService: MainService) { }

  ngOnInit() {
    const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    const mapOptions = {
      zoom: 8,
      center: myLatlng,
      scrollwheel: true
    }

    const map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Regular Map!'
    });

    marker.setMap(map);

    $('.selectpicker').selectpicker();
    initDateTimePicker();
  }

  addClub() {
    const club = {
      title: this.clubName.nativeElement.value,
      address: this.clubAddress.nativeElement.value,
      type: this.regularly.nativeElement.checked ? 'Regularly' : 'Irreglarly',
      imgUrl: this.clubImg.nativeElement.src,
      regularType: this.repeatType.nativeElement.value,
      regularPeriod: this.repeatPeriod.nativeElement.value,
      dayOfWeek: this.dayOfWeek.nativeElement.value,
      time: this.time.nativeElement.value,
      starting: this.time.nativeElement.value,
      location: this.phsicalLocation.nativeElement.value,
      activeMembers: 0,
      pastMembers: 0
    };

    this.mainService.addClub(club);
  }

}
