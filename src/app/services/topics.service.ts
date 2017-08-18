import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MainService } from './main.service';

@Injectable()
export class TopicsService {
  public loading;

  constructor( private http: Http, private mainService: MainService ) { }

  public addTopic(data) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/addtopic/', {access_token: token, data: data})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getConfirmedTopics() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/getconfirmedtopics/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getConfirmedTopicsByForumId(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/getconfirmedtopicsbyforumid/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getAllTopics() {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/gettopics/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getTopicById(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/gettopicbyid/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public activateTopic(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/activatetopic/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public deactivateTopic(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/deactivatetopic/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public deleteTopic(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/deletetopic/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public increaseView(id) {
    this.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/topic/increaseview/', {access_token: token, id: id})
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
