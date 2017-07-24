import { Component, OnInit, ViewChild, AfterViewChecked, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  // input values
  private name = '';
  private createdUser = '';
  private setupDescription = '';
  private difficulty = '';
  private minimumMember = '';
  private maximumMember = '';
  private playTime = '';
  private narrationText = '';
  private missingRules = '';
  private roleFrequencies = '';

  @ViewChild('roleNameLists') private roleNameLists;

  @Output() cancelled: EventEmitter<string> = new EventEmitter();
  @Output() saved: EventEmitter<string> = new EventEmitter();

  private isEdit: Boolean;
  private objectId;

  constructor( private mainService: MainService, private route: ActivatedRoute ) {
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
      name: '',
      team: '',
      description: ''
    };

    this.roles.push(newRole);
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
      roleFrequencies: this.roleFrequencies
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
              && this.orgData.roleFrequencies === this.roleFrequencies);
  }
}
