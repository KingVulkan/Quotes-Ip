import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   quotes = [
        new Quotes(1, ' Begin now to be what you will be hereafter', 'Saint Jerome'),
        new Quotes(2, 'You have as much laughter as you have faith', 'Martin Luther' ) ,
        new Quotes(3, 'The brain is wider than the sky', 'Emily Dickson'),
        new Quotes(4, 'A goal should scare you a little and excite you a lot', 'Jade Williams'),
        new Quotes(5, 'Magic is believing in yourself, if you can do that, you can make anything happen', 'Johanne' ),
        new Quotes(6, 'The world is full of magic things, patiently waiting for our senses to grow sharper. W.B' , 'Abu Vulkan' ),

    ];

    toogleDetails(index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }

}
