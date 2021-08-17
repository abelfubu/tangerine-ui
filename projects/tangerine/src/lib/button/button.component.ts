import { Component, ElementRef, HostBinding, Input } from '@angular/core'
import { TangerineBase } from '../core/TangerineBase'
import { utilityAtrr } from '../core/UtilityAttributes'

@Component({
  selector: 'button[tng-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss', '../core/_utility.classes.scss'],
})
export class ButtonComponent extends TangerineBase {
  @Input() color!: 'primary' | 'accent'

  @HostBinding('class.primary') get isPrimary(): boolean {
    return this.color === 'primary'
  }

  @HostBinding('class.accent') get isAccent(): boolean {
    return this.color === 'accent'
  }

  constructor(private readonly elementRef: ElementRef) {
    super()
    this.addAttributeClasses(this.elementRef.nativeElement, utilityAtrr)
  }
}
