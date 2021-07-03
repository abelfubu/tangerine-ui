import { Directive, HostListener } from '@angular/core'
import { ModalService } from './modal.service'

@Directive({
  selector: '[closeModal i]',
})
export class CloseModalDirective {
  constructor(private modalService: ModalService) {}

  @HostListener('click')
  closeModal(): void {
    this.modalService.close()
  }
}
