import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { CloseModalDirective } from './close-modal.directive';
import { ModalService } from './modal.service';

@Component({
  selector: 'tng-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  body: TemplateRef<any>;
  @Input()
  closeOnBackdropClick = true;

  @ContentChild(CloseModalDirective, { static: true })
  icon: CloseModalDirective;

  constructor(
    private modalService: ModalService,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    this.eventManager.addGlobalEventListener(
      'window',
      'keyup.esc',
      () => this.closeModal
    );
  }

  closeModal(): void {
    if (this.closeOnBackdropClick) {
      this.modalService.close();
    }
  }

  close(): void {
    this.modalService.close();
  }

  cancelClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
