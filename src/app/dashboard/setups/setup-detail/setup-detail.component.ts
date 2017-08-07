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

  private playersFilter = [];
  private teamFilter = [];
  private rolesFilter = [];

  private selectSettings: IMultiSelectSettings;

  private playerSelectSettings: IMultiSelectSettings;
  private teamSelectSettings: IMultiSelectSettings;
  private roleSelectSettings: IMultiSelectSettings;

  private filteredRoles = [];
  private filteredTeams = [];

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    console.log(this.setup);

    this.selectSettings = {
      showCheckAll: true,
      showUncheckAll: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn-group select-with-transition',
      dynamicTitleMaxItems: 5,
    };

    this.roleSelectSettings = this.setup.roles.map((val, idx) => { this.rolesFilter.push(val.name); return { id: val.name, name: val.name}; });
    this.teamSelectSettings = this.setup.teams.map((val, idx) => { this.teamFilter.push(val.name); return { id: val.name, name: val.name}; });

    const tmpPlayerArray = [];
    for (let i = parseInt(this.setup.minimumMember, 0); i <= parseInt(this.setup.maximumMember, 0); i++) {
      tmpPlayerArray.push({id: i, name: i});
      this.playersFilter.push(i);
    }

    this.playerSelectSettings = tmpPlayerArray;
    this.playerFiltered();
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

  teamFiltered(team) {
    let filtered = false;

    if (this.filteredTeams.indexOf(team.name) !== -1 && this.teamFilter.indexOf(team.name) !== -1) {
      filtered = true;
    }

    return filtered;
  }

  roleFiltered(role) {
    let filtered = false;

    if (this.filteredRoles.indexOf(role) !== -1 && this.rolesFilter.indexOf(role.name) !== -1) {
      filtered = true;
    }

    return filtered;
  }

  playerFiltered() {
    this.filteredRoles = [];
    this.setup.tblVal.map((val, idx) => {
      for (let i = 0; i < this.playersFilter.length; i++) {
        if (val[parseInt(this.playersFilter[i], 0)] > 0 && this.filteredRoles.indexOf(this.setup.roles[idx]) === -1) {
          this.filteredRoles.push(this.setup.roles[idx]);
        }
      }
    });

    this.filteredTeams = this.filteredRoles.map((val, idx) => {
      return val.team;
    });
  }
}
