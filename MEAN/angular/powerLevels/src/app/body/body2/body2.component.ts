import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.css']
})
export class Body2Component implements OnInit {

  constructor() { }
  @Input() saiyan;
  ngOnInit() {
  }

}
