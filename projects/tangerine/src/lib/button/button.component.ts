import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tng-button',
  template: ` <button [type]="type">
    <ng-content></ng-content>
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type = 'submit';
  constructor() {}

  ngOnInit(): void {}
}
