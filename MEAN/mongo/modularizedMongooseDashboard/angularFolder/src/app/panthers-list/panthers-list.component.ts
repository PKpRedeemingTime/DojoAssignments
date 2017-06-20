import { Component, OnInit } from '@angular/core';
import { PantherService } from "app/panther.service";

@Component({
  selector: 'app-panthers-list',
  templateUrl: './panthers-list.component.html',
  styleUrls: ['./panthers-list.component.css']
})
export class PanthersListComponent implements OnInit {
  panthers:any = [];
  constructor(private _PantherService:PantherService) {
    console.log("created panther-list component");
    _PantherService.get()
    .then(res => this.panthers = res)
    .catch(err => console.log(err))
   }

  ngOnInit() {
  }

}
