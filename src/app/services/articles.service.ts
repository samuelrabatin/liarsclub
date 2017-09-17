import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MainService } from './main.service';

@Injectable()
export class ArticlesService {

  constructor( private http: Http, private mainService: MainService ) { }

  public getArticles() {
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/article/getall/', {access_token: token})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getArticleById(id) {
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/article/getbyid/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public addArticle(article) {
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/article/add/', {access_token: token, article: article})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public removeArticleById(id) {
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/article/remove/', {access_token: token, id: id})
      .map(this.extractData)
      .catch(this.handleError);
  }

  public updateArticle(article) {
    const token = localStorage.getItem('liarsclubtoken');
    return this.http.post(this.mainService.apiUrl + '/article/update/', {access_token: token, article: article})
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
