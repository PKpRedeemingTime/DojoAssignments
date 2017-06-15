import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {

  constructor() { }
  @Input() power;
  ngOnInit() {
  }

}
