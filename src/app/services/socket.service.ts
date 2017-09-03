import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { MainService } from './main.service';

@Injectable()
export class SocketService {
  private url;
  private socket;

  constructor(private mainService: MainService) {
    this.url = this.mainService.apiUrl;
  }

  sendMessage(type, message) {
    this.socket.emit(type, message);
    console.log('MESSAGE SENT');
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log(data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
  }

}
