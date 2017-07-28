import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewChecked  } from '@angular/core';
import { MainService } from '../../../../services/main.service';

declare var $:any;
declare var swal:any;

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit, AfterViewChecked {
  @Input() club;

  private showDiag: Boolean = false;
  private memberState = 'active';
  private memberType = 'member';

  @Output() tagChanged: EventEmitter<string> = new EventEmitter();
  @ViewChild('editDiag') editDiag;
  private showEditDiag = false;

  constructor(private mainService: MainService) {  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    $('.selectpicker').selectpicker();
  }

  private editClick() {
    this.showDiag = true;
  }

  private confirm() {
    this.showDiag = false;
    this.showEditDiag = false;
  }

  private cancel() {
    this.showDiag = false;
    this.showEditDiag = false;
  }

  private tag() {
    this.mainService.tagClub(this.club._id, this.memberState, this.memberType).subscribe(
      d => { this.tagChanged.emit('tagged'); this.confirm(); },
      e => { console.log(e); }
    );
  }

  private unTag() {
    this.mainService.untagClub(this.club._id).subscribe(
      d => { this.tagChanged.emit('untagged'); this.confirm(); },
      e => { console.log(e); }
    );
  }
}
