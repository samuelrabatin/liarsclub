import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../../services/main.service';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-setup-detail',
  templateUrl: './setup-detail.component.html',
  styleUrls: ['./setup-detail.component.css']
})
export class SetupDetailComponent implements OnInit {
  @Input('setup') private setup;

  private selectSettings: IMultiSelectSettings;

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    console.log(this.setup);

    this.selectSettings = {
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn-group select-with-transition',
      dynamicTitleMaxItems: 3,
    };
  }


  getRolesSelectOptions(narration) {
    let str = '';
    narration.roles.map((val, index) => { str += index === narration.roles.length - 1 ? this.setup.roles[val].name : this.setup.roles[val].name + ', ' ; });

    return str;
  }

  getIntersectionSelectOptions() {
    let str = '';
    this.setup.roles.map((val, index) => { str += val.name + ', '; });
    this.setup.teams.map((val, index) => { str += index === this.setup.teams.length - 1 ? val.name : val.name + ', ' ; });

    return str;
  }

  getRolesTeams(rule) {
    let str = '';
    const rolesTeams = this.setup.roles.concat(this.setup.teams);
    rule.roles.map((val, index) => { str += index === rule.roles.length - 1 ? rolesTeams[val].name : rolesTeams[val].name + ', ' ; });

    return str;
  }

  collapseExpand(evt) {
    const card = evt.target.parentElement.parentElement.parentElement;
    card.className = card.className.includes('expanded') ? card.className.replace(' expanded', '') : card.className + ' expanded';
  }
}
