import { Component, OnInit, ViewChild, AfterViewChecked, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MainService } from '../../../services/main.service';

declare var $: any;

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit, AfterViewChecked {
  private roles = [];
  private users = [];
  private defaultRoles = [];
  private defaultVotings = [];
  private voting;

  private orgData: any;
  private imgChanged: Boolean = false;

  private roleImgChanged = [];
  private rolImgId = [];
  private isUpload = false;

  // input values
  private name = '';
  private createdUser = '';
  private setupDescription = '';
  private difficulty = '';
  private minimumMember;
  private maximumMember;
  private playTime = '';
  private narrationText = '';
  private missingRules = '';
  private roleFrequencies = '';
  private imgId = '';
  private numbers;

  @ViewChild('roleNameLists') private roleNameLists;
  @ViewChild('mainUploader') private mainUploader;
  private uploaders = [];
  private saving = false;

  @Output() cancelled: EventEmitter<string> = new EventEmitter();
  @Output() saved: EventEmitter<string> = new EventEmitter();

  private isEdit: Boolean;
  private objectId;

  private tblVal = [];

  constructor( private mainService: MainService, private route: ActivatedRoute, private router: Router ) {
    this.orgData = {
      name: '',
      createdUser: '',
      setupDescription: '',
      difficulty: '',
      minimumMember: '',
      maximumMember: '',
      playTime: '',
      narrationText: '',
      missingRules: '',
      roleFrequencies: '',
      roles: [],
      voting: {
        name: '',
        description: ''
      }
    };
  }

  ngOnInit() {
    this.roles = [];
    this.voting = {
      name: '',
      description: ''
    };

    this.mainService.getAllRoles().subscribe(
      d => {
        this.defaultRoles = d.data;
      },
      e => console.log()
    );

    this.mainService.getAllUsers().subscribe(
      d => {
        this.users = d.users;
      },
      e => {
        console.log(e);
      }
    );

    this.mainService.getAllVotings().subscribe(
      d => {
        this.defaultVotings = d.data;
      },
      e => console.log()
    );

    this.route.params.subscribe(params => {
      const id = params['index']; // (+) converts string 'id' to a number
      this.objectId = id;

      if (id !== '-1') {
        this.isEdit = true;
        this.mainService.getSetups().subscribe(
          d => {
            const setups = d.data;
            for (let i = 0; i < setups.length; i++) {
              if (setups[i]._id === id) {
                this.orgData = setups[i];
                this.name = this.orgData.name;
                this.createdUser = this.orgData.createdUser;
                this.setupDescription = this.orgData.setupDescription;
                this.difficulty = this.orgData.difficulty;
                this.minimumMember = this.orgData.minimumMember;
                this.maximumMember = this.orgData.maximumMember;
                this.playTime = this.orgData.playTime;
                this.narrationText = this.orgData.narrationText;
                this.missingRules = this.orgData.missingRules;
                this.roleFrequencies = this.orgData.roleFrequencies;
                this.imgId = this.orgData.imgId;
                this.roles = this.cloneArray(this.orgData.roles);
                this.voting = this.orgData.voting;
                this.tblVal = this.cloneArray(this.orgData.tblVal);
                this.fillNumbers();
                $('.is-empty').removeClass('is-empty');
              }
            }
          },
          e => console.log(e)
        );
      }
      // In a real app: dispatch action to load the details here.
    });
  }

  ngAfterViewChecked() {
    $('.selectpicker').selectpicker();
  }

  addNewRole() {
    const newRole = {
      imgId: '',
      name: '',
      team: '',
      description: ''
    };

    this.tblVal[this.roles.length] = [];
    for (let i = 0; i <= this.maximumMember - this.minimumMember; i++) {
      this.tblVal[this.roles.length][i] = 1;
    }

    this.roles.push(newRole);
  }

  removeRole(idx) {
    this.roles.splice(idx, 1);
  }

  roleNameChanged(evt) {
    for (let i = 0; i < this.defaultRoles.length; i++) {
      if (this.defaultRoles[i].name === evt.target.value) {
        this.roles[evt.target.getAttribute('index')] = this.defaultRoles[i];
      }
    }
  }

  votingNameChanged(evt) {
    for (let i = 0; i < this.defaultVotings.length; i++) {
      if (this.defaultVotings[i].name === evt.target.value) {
        this.voting = this.defaultVotings[i];
      }
    }
  }

  cancel() {
    this.cancelled.emit('cancelled');
  }

  save() {
    this.saving = true;

    for (let i = 0; i < this.uploaders.length; i++) {
      if (this.uploaders[i]) {
        return;
      }
    }

    const data = {
      name: this.name,
      createdUser: this.createdUser,
      setupDescription: this.setupDescription,
      difficulty: this.difficulty,
      minimumMember: this.minimumMember,
      maximumMember: this.maximumMember,
      playTime: this.playTime,
      narrationText: this.narrationText,
      missingRules: this.missingRules,
      roleFrequencies: this.roleFrequencies,
      imgId: this.imgId,
      roles: this.roles,
      voting: this.voting,
      tblVal: this.tblVal
    };

    const requireInputs = $('input,select').filter('[required]:visible');
    requireInputs.map((index, val) => {
      $(val).val() === '' ? $(val).parent().addClass('has-error') : $(val).parent().removeClass('has-error');
    });

    if ($('.has-error').length === 0) {
      if (this.isEdit) {
        this.mainService.updateSetup(data, this.objectId).subscribe(
          d => {
            this.saved.emit('saved');
            this.orgData = data;
            this.router.navigate(['/setups']);
          },
          e => console.log(e)
        );
      } else {
        this.mainService.addSetup(data).subscribe(
          d => {
            this.saved.emit('saved');
            this.orgData = data;
          },
          e => console.log(e)
        );
      }
    }
  }

  dataChanged() {
    return (this.orgData.name === this.name
              && this.orgData.createdUser === this.createdUser
              && this.orgData.setupDescription === this.setupDescription
              && this.orgData.difficulty === this.difficulty
              && this.orgData.minimumMember === this.minimumMember
              && this.orgData.maximumMember === this.maximumMember
              && this.orgData.playTime === this.playTime
              && this.orgData.narrationText === this.narrationText
              && this.orgData.missingRules === this.missingRules
              && this.orgData.voting === this.voting
              && this.compareTwoArray(this.orgData.roles, this.roles)
              && this.compareTwoArray(this.orgData.tblVal, this.tblVal)
              && this.orgData.roleFrequencies === this.roleFrequencies && !this.imgChanged && !this.isUpload);
  }

  minChange() {
    if (this.maximumMember < this.minimumMember) {
      this.minimumMember = this.maximumMember;
    }
    this.fillNumbers();
  }

  maxChange() {
    if (this.maximumMember < this.minimumMember) {
      this.maximumMember = this.minimumMember;
    }
    this.fillNumbers();
  }

  fillNumbers() {
    this.numbers = [];
    for (let i = this.minimumMember; i <= this.maximumMember; i++) {
      this.numbers.push(i);
    }
  }

  calcNumTotal() {
    const sum = [];

    for (let i = 0; i < this.tblVal.length; i++) {
      for (let j = 0; j < this.tblVal[i].length; j++) {
        sum[j] = 0;
      }
    }

    for (let i = 0; i < this.tblVal.length; i++) {
      for (let j = 0; j < this.tblVal[i].length; j++) {
        sum[j] += Number.parseInt(this.tblVal[i][j]);
      }
    }

    return sum;
  }

  tblValChange(evt, roleIdx, valIdx) {
    this.tblVal[roleIdx][valIdx] = evt.target.value;
  }

  cloneArray(arr1) {
    return JSON.parse(JSON.stringify(arr1));
  }

  compareTwoArray(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }

  mainImgUploaded(evt) {
    this.imgId = evt;
    console.log(this.mainUploader);
  }

  roleImgUploaded(ii, evt) {
    this.roles[ii].imgId = evt;
    this.uploaders[ii] = false;
    if (this.saving) {
      this.save();
    }
  }
}
