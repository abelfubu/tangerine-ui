import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core'
import { TangerineBase } from '../core/TangerineBase'
import { InputRefDirective } from './input-ref.directive'

const INPUT_HOST_ATTRIBUTES = ['blue', 'green', 'error', 'orange']

@Component({
  selector: 'tng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends TangerineBase implements AfterContentInit {
  @ContentChild(InputRefDirective, { static: true })
  input!: InputRefDirective

  @Input()
  label: string

  constructor(private readonly elementRef: ElementRef) {
    super()
    this.addAttributeClasses(
      this.elementRef.nativeElement,
      INPUT_HOST_ATTRIBUTES,
    )
  }

  ngAfterContentInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!this.input) {
      throw new Error('The component needs an input to work properly')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFoused(): boolean {
    return this.input.focus
  }
}
