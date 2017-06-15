import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() saiyan;
  @Output() updatePower = new EventEmitter();
  constructor() { }
  
  onSubmit(power) {
    console.log("submitted", power.power);
    this.updatePower.emit(power.power);
  }

  ngOnInit() {
  }

}
