import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-manage-setups',
  templateUrl: './manage-setups.component.html',
  styleUrls: ['./manage-setups.component.css']
})
export class ManageSetupsComponent implements OnInit {
  private setups;
  private hiddensetups;

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    this.updateData();
  }

  private updateData() {
    this.mainService.getSetups().subscribe(
      d => {
        this.setups = d.data;
      },
      e => {
        console.log(e);
      }
    );

    this.mainService.getRemovedSetups().subscribe(
      d => {
        this.hiddensetups = d.data;
      },
      e => {
        console.log(e);
      }
    );
  }

  getDateString(str) {
    const date = new Date(str);
    return date.toLocaleDateString();
  }

  removeSetup(id) {
    this.mainService.removeSetup(id).subscribe(
      d => {
        this.updateData();
      },
      e => {
        console.log(e);
      }
    );
  }

  restoreSetup(id) {
    this.mainService.restoreSetup(id).subscribe(
      d => {
        this.updateData();
      },
      e => {
        console.log(e);
      }
    );
  }

  deleteSetup(id) {
    this.mainService.deleteSetup(id).subscribe(
      d => {
        this.updateData();
      },
      e => {
        console.log(e);
      }
    );
  }

}
