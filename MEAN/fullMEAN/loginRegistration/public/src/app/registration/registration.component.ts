import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoguserService } from "app/loguser.service"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _LoguserService:LoguserService , private _router:Router) { }
  user = {};
  users = [];
  ngOnInit() {
  }

  onSubmit() {
    this._LoguserService.create(this.user)
    .then( user => {this.user = user;
      this.users.push(this.user);
      this.user = {};
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
