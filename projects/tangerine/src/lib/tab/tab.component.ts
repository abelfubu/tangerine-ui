import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { TangerineBase } from '../core/TangerineBase';

@Component({
  selector: 'tng-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent extends TangerineBase implements OnInit {
  @Input() title: string;
  @Input() selected = false;
  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnInit(): void {
    this.addAttributeBooleans(this.elementRef.nativeElement, ['selected']);
  }
}
