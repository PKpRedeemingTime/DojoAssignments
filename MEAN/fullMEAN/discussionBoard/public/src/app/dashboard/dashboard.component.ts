import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {name:""};
  constructor(private _UsersService:UsersService , private _router:Router) { }

  ngOnInit() {
  }

}
