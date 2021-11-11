import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
  constructor(private servive: AuthService) { }
  login() {
    this.servive.login();

  }
  save(user){

    this.servive.login2(user);
    console.log(this.user);

  }
  ngOnInit(): void {
  }

}
