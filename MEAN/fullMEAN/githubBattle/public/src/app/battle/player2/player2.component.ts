import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { UsersService } from "app/users.service";

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {

  constructor(private _UsersService:UsersService, private _httpService: HttpService) { }
  username = "";
  gitdata = [];
  user = {};
  ngOnInit() {
  }
  onSubmit(username) {
    this.username = username.username;
    this._httpService.retrieveGitData(this.username)
    .then( gitdata => { this.gitdata = gitdata; 
      this.addUser(this.gitdata); })
    .catch( err => { console.log(err); })
  }

  addUser(gitdata) {
    this._UsersService.create(gitdata)
    .then( user1 => {this.user = user1;
    this.user = {};} )
    .catch(err => console.log(err))
  }
}
