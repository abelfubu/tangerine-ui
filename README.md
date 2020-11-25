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

![Input Element]('https://raw.githubusercontent.com/abelfubu/tangerine-ui/master/src/assets/input.png)
