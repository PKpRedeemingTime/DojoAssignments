import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = "";
  githubScore = 0;
  gitdata = [];

  constructor(private _httpService: HttpService){}

  onSubmit(name) {
    this.username = name.username;
    this._httpService.retrieveGitData(this.username)
    .then( gitdata => { this.gitdata = gitdata; 
      this.githubScore = gitdata.followers + gitdata.public_repos;
      console.log(this.githubScore); })
    .catch( err => { console.log(err); })
  }
}
