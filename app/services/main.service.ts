import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
    private apiUrl:string = "localhost:8000";
    constructor ( private http: Http ) {

    }

    public getUsersData() {
        return this.http.get(this.apiUrl + '/users')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();

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