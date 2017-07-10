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
      this.mainService.getUsersData().subscribe(
        d => {
          this.users = d;
          console.log(d);
        },
        e => {
          console.log(e);
        }
      )

    }
}
