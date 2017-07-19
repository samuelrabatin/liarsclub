import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
    moduleId: module.id,
    selector: ' home-cmp ',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    public userLoggedIn : Boolean = true;

    constructor( private mainService: MainService ) {

    }

    ngOnInit() {
    }

}
