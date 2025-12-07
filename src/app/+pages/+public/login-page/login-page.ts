import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

  username:string='';
  pass:string='';
  remember:boolean=false;
  message:string='';
  router=inject(Router)

  test (){
    if (this.username=='admin' && this.pass == 'admin') {
      this.router.navigateByUrl('/private/dashboard')
    } else {
      this.message='نام کاربری یا کلمه عبور اشتباه است '
    }
  }
}
