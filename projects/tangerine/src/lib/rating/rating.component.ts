import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TangerineBase } from '../core/TangerineBase';

const BOOLEAN_ATTR = ['editable', 'rainbow'];

@Component({
  selector: 'tng-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent extends TangerineBase implements OnInit {
  public iterableStars = [];
  @Input() color = 'goldenrod';
  @Input() stars = 5;
  @Input() size = 22;
  @Input() currentRating = 0;
  @Input() editable = false;
  @Input() rainbow = false;
  @Output() newRating = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnInit(): void {
    for (let i = 0; i < this.stars; i++) {
      this.iterableStars.push(i);
    }
    this.addAttributeBooleans(this.elementRef.nativeElement, BOOLEAN_ATTR);
    if (this.rainbow) {
      this.setColor();
    }
  }

  setRating(rating: number): void {
    if (this.editable) {
      this.currentRating = rating + 1;
      this.newRating.emit(rating + 1);
      if (this.rainbow) {
        this.setColor();
      }
    }
  }

  setColor(): void {
    if (this.currentRating <= this.stars * 0.2) {
      this.color = '#db5c5c';
    } else if (this.currentRating <= this.stars * 0.4) {
      this.color = '#833683';
    } else if (this.currentRating <= this.stars * 0.6) {
      this.color = '#3354ad';
    } else if (this.currentRating <= this.stars * 0.8) {
      this.color = '#4db867';
    } else {
      this.color = 'goldenrod';
    }
  }
}
