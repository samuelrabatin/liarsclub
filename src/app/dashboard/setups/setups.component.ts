import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
    moduleId: module.id,
    selector: ' setups-cmp ',
    templateUrl: 'setups.component.html',
    styleUrls: [ 'setups.component.css' ]
})

export class SetupsComponent implements OnInit, AfterViewChecked {
  private isAddsetup: Boolean = false;
  private isEditsetup: Boolean = false;

  private viewDetails: Boolean = false;
  private viewSetup;

  private setups;

  private currentSetup;

  @ViewChild('editDiag') editDiag;

  constructor( private mainService: MainService ) {}

  ngOnInit() {
    this.getSetups();
    this.viewDetails = false;
    this.viewSetup = {};

    this.mainService.currentViewSetup = this;
  }

  ngAfterViewChecked() {
    if (this.isEditsetup) {
      console.log(1, this.currentSetup);
      this.editDiag.updateSetupValue(this.currentSetup);
    }
  }

  addSetup() {
    this.isAddsetup = true;
  }

  cancel() {
    this.isAddsetup = false;
    this.isEditsetup = false;
  }

  update() {
    this.isAddsetup = false;
    this.isEditsetup = false;
    this.getSetups();
  }

  getSetups() {
    this.mainService.getSetups().subscribe(
      d => {
        this.setups = d.data;
      },
      e => console.log(e)
    );
  }

  editSetup(evt) {
  }

  viewDetailsClick(setup) {
    this.currentSetup = setup;
    this.viewDetails = true;
  }
}

