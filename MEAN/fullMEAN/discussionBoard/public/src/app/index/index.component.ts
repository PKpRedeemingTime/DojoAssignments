import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  user = {name:""};
  constructor(private _UsersService:UsersService , private _router:Router) { }

  ngOnInit() {
  }

  createUser() {
    console.log("in users component/add");
    console.log(this.user);
    this._UsersService.create(this.user)
    .then( user => { console.log("back in my users component/add");
      console.log(user);
      
      this._router.navigateByUrl('/dashboard');
    } )
    .catch(err => console.log(err))
  }

}
