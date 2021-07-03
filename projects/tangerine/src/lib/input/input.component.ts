import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core'
import { TangerineBase } from '../core/TangerineBase'
import { InputRefDirective } from './input-ref.directive'

const INPUT_HOST_ATTRIBUTES = ['blue', 'green', 'error', 'orange']

@Component({
  selector: 'tng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent
  extends TangerineBase
  implements OnInit, AfterContentInit
{
  @ContentChild(InputRefDirective, { static: true })
  input: InputRefDirective

  @Input()
  label: string

  constructor(private elementRef: ElementRef) {
    super()
    this.addAttributeClasses(
      this.elementRef.nativeElement,
      INPUT_HOST_ATTRIBUTES,
    )
  }

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('The component needs an input to work properly')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFoused(): boolean {
    return this.input ? this.input.focus : false
  }

  ngOnInit(): void {}
}
