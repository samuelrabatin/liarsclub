import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  private apiUrl = 'http://localhost:3000';
  public loading = false;

  constructor ( private http: Http ) {

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
