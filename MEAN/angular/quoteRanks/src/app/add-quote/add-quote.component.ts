import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  constructor() { }
  @Input() quote;
  @Output() updateQuote = new EventEmitter();
  onSubmit(quote) {
    this.updateQuote.emit(quote);
  }
  ngOnInit() {
  }

}
