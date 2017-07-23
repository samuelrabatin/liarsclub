import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }

}
