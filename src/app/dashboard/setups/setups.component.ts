import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: ' setups-cmp ',
    templateUrl: 'setups.component.html',
    styleUrls: [ 'setups.component.css' ]
})

export class SetupsComponent implements OnInit{
  private isAddsetup: Boolean = false;

  ngOnInit() {

  }

  addSetup() {
    this.isAddsetup = true;
  }

  cancel() {
    this.isAddsetup = false;
  }
}

