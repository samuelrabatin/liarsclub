import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  //private apiUrl = 'https://liarsclubserver.herokuapp.com';
  private apiUrl = 'http://localhost:3000';
  public loading;

  public name = 'User';
  public avatarPublicId = '';

  constructor ( private http: Http ) {
    this.getProfileData().subscribe(
      d => {
        this.loading = false;
        if (d.type) {
          this.name = `${d.profile.firstname} ${d.profile.lastname}`;
          this.avatarPublicId = d.profile.imgId;
        }
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
    return this.http.get(this.apiUrl + '/users')
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

  public getClubs() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/all/', {access_token: token})
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

  public untagClubWithUsername(id, username) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.apiUrl + '/clubs/admin/untag/', {access_token: token, clubId: id, user: username})
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
}
