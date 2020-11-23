import { Component, OnInit } from '@angular/core';
import { TangerineBase } from '../core/TangerineBase';

@Component({
  selector: 'tng-card',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends TangerineBase implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
