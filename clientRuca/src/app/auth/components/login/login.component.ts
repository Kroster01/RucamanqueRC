import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserI } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msError: boolean = false;
  msErrorDesc: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form): void {
    this.authService.login(form.value)
      .subscribe(res => {
        if (res.code == 200) {
          this.msError = false;
          this.router.navigateByUrl('/jugadores');
        } else {
          this.msError = true;
          this.msErrorDesc = res.text;
          this.router.navigateByUrl('/auth');
        }
      });
  }

}