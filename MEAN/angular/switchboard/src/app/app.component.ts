import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  one_on_off: string;
  two_on_off: string;
  three_on_off: string;
  four_on_off: string;
  five_on_off: string;
  six_on_off: string;
  seven_on_off: string;
  eight_on_off: string;
  nine_on_off: string;
  ten_on_off: string;
  oneClass: string;
  twoClass: string;
  threeClass: string;
  fourClass: string;
  fiveClass: string;
  sixClass: string;
  sevenClass: string;
  eightClass: string;
  nineClass: string;
  tenClass: string;

  constructor() {
    this.oneClass = this.twoClass = this.threeClass = this.fourClass = this.fiveClass = this.sixClass = this.sevenClass = this.eightClass = this.nineClass = this.tenClass = "red";
    this.one_on_off = this.two_on_off = this.three_on_off = this.four_on_off = this.five_on_off = this.six_on_off = this.seven_on_off = this.eight_on_off = this.nine_on_off = this.ten_on_off = "OFF"
  }

  oneClicked(): void {
    if(this.oneClass == "red") {
      this.oneClass = "green";
      this.one_on_off = "ON";
    }
    else {
      this.oneClass = "red";
      this.one_on_off = "OFF";
    }
  }
  twoClicked(): void {
    if(this.twoClass == "red") {
      this.twoClass = "green";
      this.two_on_off = "ON";
    }
    else {
      this.twoClass = "red";
      this.two_on_off = "OFF";
    }
  }
  threeClicked(): void {
    if(this.threeClass == "red") {
      this.threeClass = "green";
      this.three_on_off = "ON";
    }
    else {
      this.threeClass = "red";
      this.three_on_off = "OFF";
    }
  }
  fourClicked(): void {
    if(this.fourClass == "red") {
      this.fourClass = "green";
      this.four_on_off = "ON";
    }
    else {
      this.fourClass = "red";
      this.four_on_off = "OFF";
    }
  }
  fiveClicked(): void {
    if(this.fiveClass == "red") {
      this.fiveClass = "green";
      this.five_on_off = "ON";
    }
    else {
      this.fiveClass = "red";
      this.five_on_off = "OFF";
    }
  }
  sixClicked(): void {
    if(this.sixClass == "red") {
      this.sixClass = "green";
      this.six_on_off = "ON";
    }
    else {
      this.sixClass = "red";
      this.six_on_off = "OFF";
    }
  }
  sevenClicked(): void {
    if(this.sevenClass == "red") {
      this.sevenClass = "green";
      this.seven_on_off = "ON";
    }
    else {
      this.sevenClass = "red";
      this.seven_on_off = "OFF";
    }
  }
  eightClicked(): void {
    if(this.eightClass == "red") {
      this.eightClass = "green";
      this.eight_on_off = "ON";
    }
    else {
      this.eightClass = "red";
      this.eight_on_off = "OFF";
    }
  }
  nineClicked(): void {
    if(this.nineClass == "red") {
      this.nineClass = "green";
      this.nine_on_off = "ON";
    }
    else {
      this.nineClass = "red";
      this.nine_on_off = "OFF";
    }
  }
  tenClicked(): void {
    if(this.tenClass == "red") {
      this.tenClass = "green";
      this.ten_on_off = "ON";
    }
    else {
      this.tenClass = "red";
      this.ten_on_off = "OFF";
    }
  }
}
