import {
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { TangerineBase } from '../core/TangerineBase';
import { utilityAtrr } from '../core/UtilityAttributes';
import { WavesDirective } from '../waves/waves.directive';

@Component({
  selector: 'tng-button',
  template: ` <button [type]="type">
    <ng-content></ng-content>
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.scss', '../core/_utility.classes.scss'],
})
export class ButtonComponent extends TangerineBase implements OnInit {
  @Input() type = 'submit';

  constructor(private elementRef: ElementRef) {
    super();
    this.addAttributeClasses(this.elementRef.nativeElement, utilityAtrr);
  }

  ngOnInit(): void {}
}
