import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';

  today = new Date();

  oneClass: string;
  twoClass: string;
  threeClass: string;
  fourClass: string;
  fiveClass: string;

  constructor() {
    this.oneClass = this.twoClass = this.threeClass = this.fourClass = this.fiveClass = "button";
  }
  oneClicked(): void {
    this.oneClass = "yellow";
    this.today = new Date();
    this.twoClass = this.threeClass = this.fourClass = this.fiveClass = "button";
  }
  twoClicked(): void {
    this.twoClass = "yellow";
    this.today = new Date();
    this.oneClass = this.threeClass = this.fourClass = this.fiveClass = "button";
  }
  threeClicked(): void {
    this.threeClass = "yellow";
    this.today = new Date();
    this.twoClass = this.oneClass = this.fourClass = this.fiveClass = "button";
  }
  fourClicked(): void {
    this.fourClass = "yellow";
    this.today = new Date();
    this.twoClass = this.threeClass = this.oneClass = this.fiveClass = "button";
  }
  fiveClicked(): void {
    this.today = new Date();
    this.oneClass = this.twoClass = this.threeClass = this.fourClass = this.fiveClass = "button";
  }

}
