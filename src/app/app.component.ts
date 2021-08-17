import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'live'
  form: FormGroup

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    fb: FormBuilder,
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      rating: [1],
    })
  }

  setColor(color: string): void {
    this.document.documentElement.style.setProperty('--my-color', color)
  }
}
