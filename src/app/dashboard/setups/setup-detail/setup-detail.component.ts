import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../../services/main.service';

import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-setup-detail',
  templateUrl: './setup-detail.component.html',
  styleUrls: ['./setup-detail.component.css']
})
export class SetupDetailComponent implements OnInit {
  @Input('setup') private setup;

  @Output() back: EventEmitter<string> = new EventEmitter();

  private playersFilter = [];
  private teamFilter = [];
  private rolesFilter = [];

  private selectSettings: IMultiSelectSettings;
  private selectedText: IMultiSelectTexts;

  private playerSelectSettings: IMultiSelectSettings;
  private teamSelectSettings: IMultiSelectSettings;
  private roleSelectSettings: IMultiSelectSettings;

  private filteredPlayers = [];
  private filteredRoles = [];
  private filteredTeams = [];

  constructor( private mainService: MainService ) { }

  ngOnInit() {
    console.log(this.setup);

    this.selectSettings = {
      showUncheckAll: true,
      checkedStyle: 'fontawesome',
      buttonClasses: 'btn-group select-with-transition',
      dynamicTitleMaxItems: 5
    };

    this.selectedText = {
      uncheckAll: 'Clear Filter',
      defaultTitle: 'No Filters'
    };

    this.roleSelectSettings = this.setup.roles.map((val, idx) => {
      // this.rolesFilter.push(val.name);
      return { id: idx, name: val.name};
    });
    this.teamSelectSettings = this.setup.teams.map((val, idx) => {
      // this.teamFilter.push(val.name);
      return { id: idx, name: val.name};
    });

    const tmpPlayerArray = [];
    for (let i = parseInt(this.setup.minimumMember, 0); i <= parseInt(this.setup.maximumMember, 0); i++) {
      tmpPlayerArray.push({id: i, name: i});
    }
    this.playerSelectSettings = tmpPlayerArray;

    this.playerFiltered();
  }


  getRolesSelectOptions(narration) {
    let str = '';
    narration.roles.map((val, index) => { str += index === narration.roles.length - 1 ? this.setup.roles[val].name : this.setup.roles[val].name + ', ' ; });

    return str;
  }

  getIntersectionSelectOptions(intersection) {
    let str = '';
    intersection.roles.map((val, index) => {
      if (index > this.setup.roles.length) {
        str += this.setup.teams[val - this.setup.roles.length].name;
      } else {
        str += this.setup.roles[val].name;
      }
      if (index !== intersection.roles.length - 1) {
        str += ', ';
      }
    });

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
    evt.target.innerHTML = evt.target.innerHTML === 'expand_more' ? 'expand_less' : 'expand_more';
    card.className = card.className.includes('expanded') ? card.className.replace(' expanded', '') : card.className + ' expanded';
  }

  teamFiltered() {
    if (this.teamFilter.length !== 0) {
      this.filteredTeams = this.teamFilter.map((val, idx) => {
        return this.setup.teams[val];
      });
    } else {
      this.filteredTeams = this.setup.teams.map((val, idx) => { return val; });
    }

    const teamNames = this.filteredTeams.map((val, idx) => { return val.name; });

    this.filteredRoles = [];
    this.setup.roles.map((val, idx) => {
      this.setup.tblVal[idx].map((val1, idx1) => {
        if (val1 > 0 && this.filteredPlayers.indexOf(idx1) > -1 && teamNames.indexOf(val.team) > -1) {
          if (this.filteredRoles.indexOf(val) === -1) {
            this.filteredRoles.push(val);
          }
        }
      });
    });

    const tmpRolesSelection = this.filteredRoles.map((val, idx) => {
      // this.rolesFilter.push(val.name);
      return { id: idx, name: val.name};
    });

    tmpRolesSelection.sort(this.sortFunction);
    this.roleSelectSettings = tmpRolesSelection;

    this.rolesFilter = [];
    this.roleFiltered();
  }

  roleFiltered() {
    const teamNames = this.filteredTeams.map((val, idx) => { return val.name; });
    this.setup.roles.map((val, idx) => {
      if ((this.rolesFilter.length === 0 || this.filteredRoles.indexOf(idx)) && teamNames.indexOf(val.team) > -1) {
        this.setup.tblVal[idx].map((val1, idx1) => {
          if (val1 > 0 && this.filteredPlayers.indexOf(idx1) > -1) {
            if (this.filteredRoles.indexOf(val) === -1) {
              this.filteredRoles.push(val);
            }
          }
        });
      }
    });
  }

  playerFiltered() {
    if (this.playersFilter.length === 0) {
      this.filteredPlayers = [];
      for (let i = parseInt(this.setup.minimumMember, 0); i <= parseInt(this.setup.maximumMember, 0); i++) {
        this.filteredPlayers.push(i);
        // this.playersFilter.push(i);
      }
    } else {
      this.filteredPlayers = this.playersFilter;
    }

    const teamNames = [];

    this.setup.tblVal.map((val, idx) => {
      val.map((val1, idx1) => {
        if (val1 > 0 && this.filteredPlayers.indexOf(idx1) > -1 && teamNames.indexOf(this.setup.roles[idx].team)) {
          teamNames.push(this.setup.roles[idx].team);
        }
      });
    });

    let tmpSetting = [];
    this.filteredTeams = [];
    this.setup.teams.map((val, idx) => {
      if (teamNames.indexOf(val.name) > -1) {
        tmpSetting.push({id: idx, name: val.name});
        this.filteredTeams.push(val);
      }
    });

    this.filteredTeams = this.setup.teams.map((val, idx) => { return val; });
    tmpSetting = this.setup.teams.map((val, idx) => { return {id: idx, name: val.name}; });

    tmpSetting.sort(this.sortFunction);
    this.teamSelectSettings = tmpSetting;

    this.teamFilter = [];
    this.teamFiltered();
  }

  intersectionFiltered(intersection) {
    const inRoles = [];
    const inTeams = [];
    for (let i = 0; i < intersection.roles.length; i++) {
      if (intersection.roles[i] > this.setup.roles.length) {
        inTeams.push(this.setup.teams[intersection.roles[i] - this.setup.roles.length]);
      } else {
        inRoles.push(this.setup.roles[intersection.roles[i]]);
      }
    }

    for (let i = 0; i < inTeams.length; i++) {
      const idx = this.filteredTeams.indexOf(inTeams[i]);
      if ((this.teamFilter.length === 0 && idx > -1) || this.teamFilter.indexOf(idx) > -1) {
        return true;
      }
    }

    for (let i = 0; i < inRoles.length; i++) {
      const idx = this.filteredRoles.indexOf(inRoles[i]);
      if ((this.rolesFilter.length === 0 && idx > -1) || this.rolesFilter.indexOf(idx) > -1) {
        return true;
      }
    }

    return false;
  }

  sortFunction(v1, v2) {
    return v1.name > v2.name ? 1 : v1.name === v2.name ? 0 : -1;
  }

  goBack() {
    this.back.emit('go back');
  }
}
