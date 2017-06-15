import { Component } from '@angular/core';
import { Power } from './power';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  powers = [];
  power = new Power();
  dataFromChild(eventData) {
    console.log(eventData);
  }
}
