import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';
import { InputRefDirective } from './input/input-ref.directive';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab/tab.component';
import { OpenModalDirective } from './modal/open-modal.directive';
import { ModalService } from './modal/modal.service';
import { CloseModalDirective } from './modal/close-modal.directive';
import { WavesDirective } from './waves/waves.directive';

@NgModule({
  declarations: [
    RatingComponent,
    InputComponent,
    InputRefDirective,
    ModalComponent,
    ButtonComponent,
    CardComponent,
    TabPanelComponent,
    TabComponent,
    OpenModalDirective,
    CloseModalDirective,
    WavesDirective,
  ],
  imports: [CommonModule],
  exports: [
    RatingComponent,
    InputComponent,
    InputRefDirective,
    ModalComponent,
    ButtonComponent,
    CardComponent,
    TabPanelComponent,
    TabComponent,
    OpenModalDirective,
    CloseModalDirective,
    WavesDirective,
  ],
})
export class TangerineModule {
  static forRoot(): ModuleWithProviders<TangerineModule> {
    return {
      ngModule: TangerineModule,
      providers: [ModalService],
    };
  }
}
