import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quote = new Quote;
  quotes = [];
  updateQuote(event) {
    this.quote = new Quote(event.quote, event.author, 0);
    this.quotes.push(this.quote);
    this.quote = new Quote;
  }
  
}
