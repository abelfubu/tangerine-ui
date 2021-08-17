import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core'
import { ModalService } from './modal.service'

@Directive({
  selector: '[openModal]',
})
export class OpenModalDirective implements OnInit, OnDestroy {
  elements: unknown[]
  listeners: (() => void)[] = []

  @Input() set openModal(els: unknown[] | unknown) {
    this.elements =
      els instanceof Array
        ? [...this.elements, ...els]
        : [...this.elements, els]

    this.elements.forEach((el) => {
      if (!(el instanceof HTMLButtonElement)) {
        this.listeners.push(
          this.renderer.listen(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (el as any).elementRef.nativeElement,
            'click',
            () => this.clickHandler(),
          ),
        )
      } else {
        this.listeners.push(
          this.renderer.listen(el, 'click', () => this.clickHandler()),
        )
      }
    })
  }

  constructor(
    private readonly templateRef: TemplateRef<HTMLElement>,
    private readonly viewContainer: ViewContainerRef,
    private readonly renderer: Renderer2,
    private readonly modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.modalService.close$.subscribe(() => this.viewContainer.clear())
  }

  ngOnDestroy(): void {
    this.listeners.forEach((el) => el())
  }

  private clickHandler(): void {
    this.viewContainer.clear()
    this.viewContainer.createEmbeddedView(this.templateRef)
  }
}
