import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../../../services/main.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') private username;
  @ViewChild('password') private password;

  private loginFaildMsg = '';

  constructor( private mainService: MainService, private router: Router ) { }

  ngOnInit() {
    this.loginFaildMsg = '';

    const page = $('.full-page');
    const image_src = page.data('image');

    if(image_src !== undefined){
      const image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
      page.append(image_container);
    }

    setTimeout(function() {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700);
  }

  login() {
    this.mainService.login(this.username.nativeElement.value, this.password.nativeElement.value).subscribe(
      d => {
        if (d.data.token) {
          localStorage.setItem('username', this.username.nativeElement.value);
          localStorage.setItem('liarsclubtoken', d.data.token);
          this.loginFaildMsg = '';
          this.router.navigate(['/home']);
        } else {
          this.loginFaildMsg = d.data;
        }
      },
      e => { console.log(e); }
    );
  }
}
