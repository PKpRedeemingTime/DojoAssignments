import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  constructor() { }
  @Input() quotes;
  ngOnInit() {
  }

  upVote(quote, i) {
    quote.vote++;
  }

  downVote(quote, i) {
    quote.vote--;
  }

  delete(quote, i) {
    this.quotes.splice(i,1);
  }

}
