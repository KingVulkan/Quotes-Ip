import { Component, OnInit, EventEmitter , Input , Output } from '@angular/core';
import {Quotes} from '../quotes' ;
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()quote: Quotes ;
  @Output() isComplete = new EventEmitter<boolean>() ;

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete) ;
  }

  constructor() { }

  ngOnInit() {
  }

}
