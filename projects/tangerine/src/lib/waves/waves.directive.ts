import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
  selector: '[waves button]',
})
export class WavesDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  createWaveEffect(event: any): void {
    const { layerX, layerY } = event
    const span = this.renderer.createElement('span')
    this.renderer.addClass(span, 'waves')
    this.renderer.appendChild(this.elementRef.nativeElement, span)
    this.renderer.setStyle(span, 'rigth', layerY + 'px')
    this.renderer.setStyle(span, 'left', layerX + 'px')
    setTimeout(() => {
      this.renderer.removeChild(this.elementRef.nativeElement, span)
    }, 300)
  }
}
