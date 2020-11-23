import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { EditableDirective } from './directives/editable.directive';
import { InputComponent } from './input/input.component';
import { InputRefDirective } from './directives/input-ref.directive';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    RatingComponent,
    EditableDirective,
    InputComponent,
    InputRefDirective,
    ModalComponent,
    ButtonComponent,
    CardComponent,
    TabPanelComponent,
    TabComponent,
  ],
  imports: [CommonModule],
  exports: [
    RatingComponent,
    EditableDirective,
    InputComponent,
    InputRefDirective,
    ModalComponent,
    ButtonComponent,
    CardComponent,
    TabPanelComponent,
    TabComponent,
  ],
})
export class TangerineModule {}
