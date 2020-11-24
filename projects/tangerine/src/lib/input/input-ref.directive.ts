import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[InputRef input]',
})
export class InputRefDirective {
  public focus = false;

  constructor() {}

  @HostListener('focus')
  onFocus(): void {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur(): void {
    this.focus = false;
  }
}
