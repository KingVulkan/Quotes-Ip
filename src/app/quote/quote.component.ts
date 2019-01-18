import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [
    new Quote(1, 'Kevin Kruse', 'Life is about making an impact, not making an income', 'mandela', new Date(2018, 11, 14) ),
    new Quote(2, 'Napoleon Hill', 'Whatever the mind of man can conceive and believe it can achieve', 'Rae', new Date(2018, 11, 14)),
    new Quote(3, 'Albert Einstein', 'Strive not be a success, but rather to be of value', 'RaeMan', new Date(2018, 11, 14)),

  ];

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuote(toDelete, index) {
if (toDelete) {
    // tslint:disable-next-line:no-shadowed-variable
    const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`);

    if (toDelete) {
        this.quotes.splice(index, 1);
    }
}
}
      addNewQuote(quote) {
      const quoteLength = this.quotes.length;

      quote.completeDate = new Date(quote.completeDate);
      this.quotes.push(quote);

}
  constructor() { }

  ngOnInit() {
  }

}

