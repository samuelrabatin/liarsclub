import { Injectable } from '@angular/core';

import { MainService } from './main.service';
import { PostsService } from './posts.service';
import { TopicsService } from './topics.service';

@Injectable()
export class StorageService {
  public profileData = [];
  public allUsers;
  public allProfiles = [];
  public clubs = [];
  public allRoles = [];
  public allVotings = [];
  public setups = [];
  public confirmedForums = [];
  public allForums = [];
  public allPosts = [];
  public reportedPosts = [];
  public confirmedTopics = [];
  public allTopics = [];
  public userNames = [];

  constructor( private mainService: MainService, private postService: PostsService, private topicService: TopicsService ) {
    this.getUserName();
    this.getAllForums();
    this.getAllPosts();
    this.getAllProfiles();
    this.getAllRoles();
    this.getAllTopics();
    this.getAllUsers();
    this.getAllVotings();
    this.getClubs();
    this.getConfirmedForums();
    this.getConfirmedTopics();
    this.getProfileData();
    this.getReportedPosts();
    this.getSetups();
  }

  public getUserName() {
    this.mainService.getUserName();
  }

  public getAllUsers() {
    this.mainService.getAllUsers().subscribe(
      d => {
        this.allUsers = d;
        if (this.allProfiles.length) {
          const profiles = this.allProfiles;
          d.users.map((val, idx) => {
            this.userNames[val._id] = val.name;
            for (let i = 0; i < profiles.length; i++) {
              if (profiles[i].username === val.name) {
                this.userNames[val._id] = `${this.userNames[val._id]} (${profiles[i].firstname} ${profiles[i].lastname})`;
              }
            }
          });
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  public getProfileData() {
    this.mainService.getProfileData().subscribe(
      d => {
        this.profileData = d;
        this.mainService.avatarPublicId = d.profile.imgId;
        this.mainService.name = `${d.profile.firstname} ${d.profile.lastname}`;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getAllProfiles() {
    this.mainService.getAllProfiles().subscribe(
      d => {
        this.allProfiles = d;
        if (this.allUsers && this.allUsers.users.length) {
          const profiles = this.allProfiles;
          this.allUsers.users.map((val, idx) => {
            this.userNames[val._id] = val.name;
            for (let i = 0; i < profiles.length; i++) {
              if (profiles[i].username === val.name) {
                this.userNames[val._id] = `${this.userNames[val._id]} (${profiles[i].firstname} ${profiles[i].lastname})`;
              }
            }
          });
        }
      },
      e => {
        console.log(e);
      }
    );
  }

  public getClubs() {
    this.mainService.getClubs().subscribe(
      d => {
        this.clubs = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getAllRoles() {
    this.mainService.getAllRoles().subscribe(
      d => {
        this.allRoles = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getAllVotings() {
    this.mainService.getAllVotings().subscribe(
      d => {
        this.allVotings = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getSetups() {
    this.mainService.getSetups().subscribe(
      d => {
        this.setups = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getConfirmedForums() {
    this.mainService.getConfirmedForums().subscribe(
      d => {
        this.confirmedForums = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getAllForums() {
    this.mainService.getAllForums().subscribe(
      d => {
        this.allForums = d;
      },
      e => {
        console.log(e);
      }
    );
  }
  //////----------------    Posts Service   --------------////////////
  public getAllPosts() {
    this.postService.getAllPosts().subscribe(
      d => {
        this.allPosts = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getReportedPosts() {
    this.postService.getReportedPosts().subscribe(
      d => {
        this.reportedPosts = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  //////----------------    Topics Service   --------------////////////
  public getConfirmedTopics() {
    this.topicService.getConfirmedTopics().subscribe(
      d => {
        this.confirmedTopics = d;
      },
      e => {
        console.log(e);
      }
    );
  }

  public getAllTopics() {
    this.topicService.getAllTopics().subscribe(
      d => {
        this.allTopics = d;
      },
      e => {
        console.log(e);
      }
    );
  }

}
