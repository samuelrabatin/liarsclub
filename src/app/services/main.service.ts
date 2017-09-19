import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { SocketService } from './socket.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

declare var tinymce: any;
declare var $: any;

@Injectable()
export class MainService {
  public apiUrl = 'https://liarsclubserver.herokuapp.com';
  // public apiUrl = 'http://192.168.4.36:3000';
  public jQuery = $;

  public loading;
  public cloudinaryUploadPresets = {
    profile: 'dnqs3sro',
    clubs: 'vzyghp9n',
    setups: 'mvfr6hdk'
  };
  public cloudName = 'liars-club';
  public userNames = [];
  public userDisplayNames = [];

  public name = 'User';
  public userRole = '';
  public userId = '';
  public username = '';
  public avatarPublicId = '';

  public currentViewSetup;

  public editor;

  constructor ( private http: Http, private satizer: DomSanitizer ) {
    if (http) {
      this.getProfileData().subscribe(
        d => {
          this.loading = false;
          if (d.type) {
            this.name = `${d.profile.firstname} ${d.profile.lastname}`;
            this.avatarPublicId = d.profile.imgId;
          }
        },
        e => {
          console.log(e);
        }
      );

      this.getUserName();
    }
  }

  public getUserName() {
    this.getAllUsers().subscribe(
      d => {
        this.getAllProfiles().subscribe(
          profiles => {
            d.users.map((val, idx) => {
              this.userNames[val._id] = val.name;
              this.userDisplayNames[val._id] = val.name;
              for (let i = 0; i < profiles.length; i++) {
                if (profiles[i].username === val.name) {
                  this.userNames[val._id] = `${this.userNames[val._id]} (${profiles[i].firstname} ${profiles[i].lastname})`;
                  profiles[i].displayname ?
                    this.userDisplayNames[val._id] = `${this.userDisplayNames[val._id]} (${profiles[i].displayname})` :
                    this.userDisplayNames[val._id] = `${this.userDisplayNames[val._id]}`;
                }
              }
            });
          },
          e1 => {
            console.log(e1);
          }
        );
      },
      e => {
        console.log(e);
      }
    );
  }

  public login(username, password) {
    this.loading = true;
    return this.http.post(this.apiUrl + '/users/login/', {name: username, password: password})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public register(username, email, password) {
    this.loading = true;
    return this.http.post(this.apiUrl + '/users/register/', {username: username, email: email, password: password})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public logout() {
    this.loading = true;
    return this.http.post(this.apiUrl + '/users/logout/', {username: localStorage.getItem('username')})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getUsersData() {
    this.loading = true;
    return this.http.get(this.apiUrl + '/users/')
      .map(this.extractData)
      .catch(this.handleError);
  }


  public getUserProfileById(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/users/getuserbyid/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getAllUsers() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/users/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public saveProfile(data) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    data.access_token = token;
    return this.http.post(this.apiUrl + '/users/saveprofile/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getProfileData() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/users/getprofile/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getAllProfiles() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/users/getallprofiles/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getClubs() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/all/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getClubById(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/getclubbyid/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getConfirmedClubs() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/confirmed/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public addClub(data) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    data.access_token = token;
    return this.http.post(this.apiUrl + '/clubs/add/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public updateClub(club) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    const data = {
      access_token: token,
      club: club
    };
    return this.http.post(this.apiUrl + '/clubs/update/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public updateUserTag(clubId, user) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    const data = {
      access_token: token,
      id: clubId,
      user: user
    };
    return this.http.post(this.apiUrl + '/clubs/updateusertag/', data);
  }

  public approveClub(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    const data = {
      access_token: token,
      id: id
    };
    return this.http.post(this.apiUrl + '/clubs/approve/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public rejectClub(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    const data = {
      access_token: token,
      id: id
    };
    return this.http.post(this.apiUrl + '/clubs/reject/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public removeClub(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    const data = {
      access_token: token,
      id: id
    };
    return this.http.post(this.apiUrl + '/clubs/remove/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public tagClub(id, memberState, memberType) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    const data = {
      access_token: token,
      clubId: id,
      memberState: memberState,
      memberType: memberType
    };

    return this.http.post(this.apiUrl + '/clubs/tag/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public untagClub(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/untag/', {access_token: token, clubId: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public untagClubWithUserId(id, userId) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/admin/untag/', {access_token: token, clubId: id, userId: userId})
      .map(this.extractData)
      .catch(this.handleError);
  }

  ////////-----------   Setups Services  --------------//////////////
  public getAllRoles() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/getallroles/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  };

  public getAllVotings() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/getallvotings/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  };

  public addSetup(data) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    data.access_token = token;
    return this.http.post(this.apiUrl + '/setups/addsetup/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public updateSetup(data, id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    data.access_token = token;
    data.object_id = id;
    return this.http.post(this.apiUrl + '/setups/updatesetup/', data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getSetups() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/getallsetups/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getSetupById(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/getsetupbyid/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public removeSetup(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/removesetup/', {access_token: token, setupId: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public restoreSetup(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/restoresetup/', {access_token: token, setupId: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getRemovedSetups() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/getremovedsetups/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public deleteSetup(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/setups/deletesetup/', {access_token: token, setupId: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  ////////--------  Forums Services --------------/////////////////////
  public addForum(data) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/forums/addforum/', {access_token: token, data: data})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getConfirmedForums() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/forums/getconfirmedforums/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getAllForums() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/forums/getforums/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public activateForum(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/forums/activateforum/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public deactivateForum(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/forums/deactivateforum/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public deleteForum(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/forums/deleteforum/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public updateForumsOrder(forums) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/forums/updateforumsorder/', {access_token: token, forums: forums})
      .map(this.extractData)
      .catch(this.handleError);
  }

  // -----    Notifications API   ----- //
  public getNotifications() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/notifications/get/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public sendNotification(event) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/sendnotificationnow/', {access_token: token, event: event})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /////////////////////////////////////////////////////////////////////

  public validateUsertoken() {
    this.loading = false;
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('liarsclubtoken');

    return this.http.post(this.apiUrl + '/users/checktoken/', {name: username, token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();

    return body || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

  getDateString(str) {
    if (!str) {
      return '';
    }
    const date = new Date(str);
    return date.toLocaleDateString();
  }

  getDateTimeString(str) {
    if (!str) {
      return '';
    }
    const date = new Date(str);
    return date.toLocaleString();
  }

  getDateTimeDifference(str) {
    if (!str) {
      return '';
    } else {
      const today = new Date();
      const cday = new Date(str);
      const diff = today.getTime() - cday.getTime();
      if (diff < 1000 * 60) {
        return `${(diff / 1000).toFixed(0)} second` + ((diff / 1000).toFixed(0) === '1' ? '' : 's'  + ' ago');
      } else if (diff < 1000 * 60 * 60) {
        return `${(diff / 1000 / 60).toFixed(0)} minute` + ((diff / 1000 / 60).toFixed(0) === '1' ? '' : 's'  + ' ago');
      } else if (diff < 1000 * 60 * 60 * 24) {
        return `${(diff / 1000 / 60 / 60).toFixed(0)} hour`
        + ((diff / 1000 / 60 / 60).toFixed(0) === '1' ? '' : 's'  + ' ago');
      } else if (diff < 1000 * 60 * 60 * 24 * 30) {
        return `${(diff / 1000 / 60 / 60 / 24).toFixed(0)} day`
        + ((diff / 1000 / 60 / 60 / 24).toFixed(0) === '1' ? '' : 's'  + ' ago');
      } else if (diff < 1000 * 60 * 60 * 24 * 365) {
        return `${(diff / 1000 / 60 / 60 / 24 / 30).toFixed(0)} month`
        + ((diff / 1000 / 60 / 60 / 24 / 30).toFixed(0) === '1' ? '' : 's'  + ' ago');
      } else {
        return `${(diff / 1000 / 60 / 60 / 24 / 365).toFixed(0)} year`
        + ((diff / 1000 / 60 / 60 / 24 / 365).toFixed(0) === '1' ? '' : 's'  + ' ago');
      }
    }
  }

  initTinyMCE(defaultText = '') {
    const me = this;

    tinymce.init({
      selector: '.tinymce-editor',
      plugins: [
        'link image hr anchor pagebreak',
        'searchreplace wordcount code fullscreen',
        'insertdatetime table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc youtube'
      ],
      toolbar1: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ',
      toolbar2: 'forecolor backcolor emoticons | codesample | createspan removespan | youtube',
      menubar: 'edit insert view format table tools',
      relative_urls: false,
      document_base_url: 'assets/js/plugins/tinymce/',
      skin_url: 'skins/lightgray',
      branding: false,
      image_advtab: true,
      paste_preprocess: function(plugin, args) {
        while (args.content.includes('&lt;')) {
          args.content = args.content.replace('&lt;', '<');
        }

        while (args.content.includes('&gt;')) {
          args.content = args.content.replace('&gt;', '>');
        }
      },
      extended_valid_elements: '+iframe[src|width|height|name|align|class]',
      file_picker_callback: function(callback, value, meta) {
        if (meta.filetype === 'image') {
          $('#upload').trigger('click');
          $('#upload').on('change', function(evt) {
            me.readFile(callback, evt.target);
          });
        }
      },
      height: 200,
      max_height: 'calc(100% - 500px)',
      paste_data_images: true,
      setup: editor => {
        this.editor = editor;

        this.editor.on('paste', function(e) {
        });
      },
    });
  }

  private readFile(callback, inputFile) {
    const file: File = inputFile.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = function(e) {
    };

    myReader.onload = function(e: any) {
      callback(e.target.result, {
        alt: ''
      });
    };

    myReader.readAsDataURL(file);
  }
}
