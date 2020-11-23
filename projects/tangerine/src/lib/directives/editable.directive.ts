import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[editable]',
})
export class EditableDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setAttribute(el.nativeElement, 'edit', 'true');
  }
}
