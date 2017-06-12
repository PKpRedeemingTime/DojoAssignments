import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [{email: ["bill@gates.com", "ada@lovelace.com", "john@carmac.com", "gabe@newel.com"]}, {importance: [true, true, false, false]}, {subject:["New Windows", "Programming", "Updated Algo", "HL3!"]}, {content:["Windows XI will launch in year 2100.", "Enchantress of Numbers", "New algorithm for shadow volumes.", "Just kidding..."]}]
}
