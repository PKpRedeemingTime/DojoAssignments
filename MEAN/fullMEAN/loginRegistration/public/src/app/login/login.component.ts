import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoguserService } from "app/loguser.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _LoguserService:LoguserService , private _router:Router) { }
  user = {};
  users = [];
  ngOnInit() {
  }
  onSubmit() {
    this._LoguserService.login(this.user)
    .then( user => { this.user = user;
      this.success();
    } )
    .catch(err => console.log(err))
  }

  success() {
    this._LoguserService.success()
    .then( users => this.users = users)
    .catch(err => console.log(err))
  }

}
