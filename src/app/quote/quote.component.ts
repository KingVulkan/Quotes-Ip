import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [
    new Quotes(1, 'Saint Jerome', 'Begin now to be what you will be hereafter', 'Abu', new Date(2018, 11, 14) ),
    new Quotes(2, 'Martin Luther', 'You have as much laughter as you have faith', 'Vulkan', new Date(2018, 11, 14)),
    new Quotes(3, 'Albert Einstein', 'Strive not be a success, but rather to be of value', 'Mano', new Date(2018, 11, 14)),

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

