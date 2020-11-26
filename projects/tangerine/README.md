# Tangerine UI

Tangerine is a UI Library for Angular, easy to implement with functional components.

## Installation

Run `npm i @abelfubu/tangerine`

## Angular config

To start using the tangerine UI library just import the module in the main app.module

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
// Import Tangerine module
import { TangerineModule } from "projects/tangerine/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Configure with the forRoot() method
    TangerineModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Input component

Just wrap a normal html input with the <tng-input> component, you can add any icon, be it a svg icon, font-awesone or material icon inside the wraping element.

The component accepts a label property

```html
<tng-input [ngClass]="checkErrors(form.controls.username)">
  <input
    type="text"
    name="username"
    formControlName="username"
    placeholder="Name"
  />
  <i class="far fa-user"></i>
</tng-input>
```

![Input Component](https://raw.githubusercontent.com/abelfubu/tangerine-ui/master/src/assets/input.png)

## Rating

Add the <tng-rating> component, it's possible to configure the amount of stars you want it to have and the currentRating, When the editable flag is on the component emits values so that it can be listened to.

#### Attributes

- color, by default 'goldenrod'
- stars, the number of stars to render
- size, the size in px of each star
- currentRating, the current rating...
- editable, flag to make the component editable
- rainbow, multiple colors behaviour
- (newRating), event to listen to when the stars are clicked

```html
<tng-rating
  currentRating="3"
  color="#232323"
  stars="10"
  size="42"
  editable
  rainbow
  (newRating)="getRating($event)"
></tng-rating>
```

![Rating Component](https://raw.githubusercontent.com/abelfubu/tangerine-ui/master/src/assets/rating.png)
