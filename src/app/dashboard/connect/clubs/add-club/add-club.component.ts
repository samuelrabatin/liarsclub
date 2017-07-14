import { Component, OnInit } from '@angular/core';
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

}
