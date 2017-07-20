import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../../../services/main.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('username') private username;
  @ViewChild('email') private email;
  @ViewChild('password') private password;

  private errmsg;

  constructor( private mainService: MainService, private router: Router ) { }

  ngOnInit() {
    const page = $('.full-page');
    const image_src = page.data('image');

    if (image_src !== undefined) {
      const image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
      page.append(image_container);
    }

    setTimeout(function() {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700);

    this.errmsg = '';
  }

  private register() {
    this.mainService.register(this.username.nativeElement.value, this.email.nativeElement.value,
      this.password.nativeElement.value).subscribe(
      d => {
        if (d.type) {
          this.router.navigate(['/users/login']);
        } else {
          console.log(d.errmsg);
          this.errmsg = d.errmsg;
        }
      },
      e => {
        console.log(e);
      }
    );
  }
}
