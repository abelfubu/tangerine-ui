import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[openModal]',
})
export class OpenModalDirective implements OnInit, OnDestroy {
  elements: HTMLBaseElement[];
  listeners: (() => void)[] = [];

  @Input() set openModal(els: any) {
    this.elements = els.length ? els : [els];

    this.elements.forEach((el) => {
      this.listeners.push(
        this.renderer.listen(el, 'click', () => this.clickHandler())
      );
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    private modalService: ModalService
  ) {}

  private clickHandler(): void {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  ngOnInit(): void {
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  ngOnDestroy(): void {
    this.listeners.forEach((el) => el());
  }
}
