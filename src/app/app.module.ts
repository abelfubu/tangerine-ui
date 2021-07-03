import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {
  CursorModule,
  TangerineModule,
} from 'projects/tangerine/src/public-api'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TangerineModule.forRoot(),
    ReactiveFormsModule,
    CursorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
