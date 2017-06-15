import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  constructor() { }
  @Input() quote;
  ngOnInit() {
  }

}
