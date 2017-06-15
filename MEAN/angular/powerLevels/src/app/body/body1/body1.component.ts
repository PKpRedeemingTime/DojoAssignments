import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component implements OnInit {

  constructor() { }
  @Input() power;
  ngOnInit() {
  }

}
