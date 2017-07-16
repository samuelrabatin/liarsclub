import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
    moduleId: module.id,
    selector: ' home-cmp ',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    public userLoggedIn : Boolean = true;
    private users:any;

    constructor( private mainService: MainService ) {

    }

    ngOnInit(){
      this.mainService.login('admin1', 'password').subscribe(
        d => {
          console.log(d.data);
          localStorage.setItem('liarsclubtoken', d.data.token);
        },
        e => { console.log(e); }
      );
    }
}
