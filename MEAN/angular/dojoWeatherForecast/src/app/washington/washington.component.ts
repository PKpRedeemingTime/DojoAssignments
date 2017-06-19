import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  constructor(private _httpService: HttpService){}
  city = "washington,dc"
  gitdata = [];
  humidity = 0;
  temp = 0;
  tempHigh = 0;
  tempLow = 0;
  status = "";

  ngOnInit() {
    this._httpService.retrieveGitData(this.city)
      .then( gitdata => { this.gitdata = gitdata;
      this.humidity = gitdata.main.humidity;
      this.temp = gitdata.main.temp;
      this.tempHigh = gitdata.main.temp_max;
      this.tempLow = gitdata.main.temp_min;
      this.status = gitdata.weather[0].main;
        })
    .catch( err => { console.log(err); })
  }

}
