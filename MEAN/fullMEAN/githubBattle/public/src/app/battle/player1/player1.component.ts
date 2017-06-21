import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { UsersService } from "app/users.service";

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {

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
    .catch( err => { console.log(err); 
    })
  }

  addUser(gitdata) {
    this._UsersService.create(gitdata)
    .then( data => {this.user = data;
      console.log(data)
      this.user = {};} )
    .catch(err => console.log(err))
  }
}
