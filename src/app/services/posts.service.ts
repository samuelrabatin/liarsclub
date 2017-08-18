import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MainService } from './main.service';

@Injectable()
export class PostsService {

  constructor( private http: Http, private mainService: MainService ) { }

  public getAllPosts() {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/getallposts/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getPostsByTopicId(id) {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/getpostsbytopicid/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public addPost(data) {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/addpost/', {access_token: token, data: data})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public deletePost(id) {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/deletepost/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public likePost(id) {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/likepost/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public dislikePost(id) {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/dislikepost/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public removeLikePost(id) {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/removelikepost/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public removeDislikePost(id) {
    this.mainService.loading = true;
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/forums/removedislikepost/', {access_token: token, id: id})
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
