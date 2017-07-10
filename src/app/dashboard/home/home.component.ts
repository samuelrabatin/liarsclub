import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: ' home-cmp ',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    public userLoggedIn : Boolean = true;

    ngOnInit(){

    }
}
