import { DOCUMENT } from '@angular/common'
import { Component, Inject } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'

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
      rating: [''],
    })
  }

  getRating(rating: number): void {
    this.form.controls.rating.setValue(rating)
  }

  onSubmit(): void {
    console.log(this.form.value)
  }

  checkErrors(control: AbstractControl): string {
    if (control.touched && control.errors) {
      return 'error'
    }
  }

  setColor(color: string): void {
    this.document.documentElement.style.setProperty('--my-color', color)
  }
}
