import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Quote } from '../quote';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() toDelete = new EventEmitter<boolean>();


  likeCount = 0;
  dislikeCount = 0;

  like() {
    this.likeCount = this.likeCount + 1;
  }
  dislike() {
    this.dislikeCount = this.dislikeCount + 1;
  }

  quoteDelete(remove: boolean) {
    this.toDelete.emit(remove);
  }


  constructor() { }

  ngOnInit() {
  }

}

