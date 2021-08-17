import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { TangerineBase } from '../core/TangerineBase'

const BOOLEAN_ATTR = ['editable', 'rainbow']

@Component({
  selector: 'tng-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent
  extends TangerineBase
  implements OnInit, ControlValueAccessor
{
  public iterableStars: number[] = []
  @Input() color = 'goldenrod'
  @Input() stars = 5
  @Input() size = 22
  @Input() currentRating = 0
  @Input() editable = false
  @Input() rainbow = false
  @Output() newRating = new EventEmitter<number>()

  private propagateChange: (value: number) => void

  private propagateTouched: () => void

  constructor(private readonly elementRef: ElementRef) {
    super()
  }

  ngOnInit(): void {
    this.iterableStars = [...new Array(this.stars)].map<number>((_, i) => i)
    this.addAttributeBooleans(this.elementRef.nativeElement, BOOLEAN_ATTR)
    if (this.rainbow) {
      this.setColor()
    }
  }

  writeValue(value: number): void {
    this.currentRating = value
  }

  registerOnChange(fn: (value: number) => void): void {
    this.propagateChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.propagateTouched = fn
  }

  setRating(rating: number): void {
    if (this.editable) {
      this.currentRating = rating + 1
      this.newRating.emit(rating + 1)
      this.propagateChange(this.currentRating)
      if (this.rainbow) {
        this.setColor()
      }
    }
  }

  onBlur(): void {
    this.propagateTouched()
  }

  setColor(): void {
    if (this.currentRating <= this.stars * 0.2) {
      this.color = '#db5c5c'
    } else if (this.currentRating <= this.stars * 0.4) {
      this.color = '#833683'
    } else if (this.currentRating <= this.stars * 0.6) {
      this.color = '#3354ad'
    } else if (this.currentRating <= this.stars * 0.8) {
      this.color = '#4db867'
    } else {
      this.color = 'goldenrod'
    }
  }
}
