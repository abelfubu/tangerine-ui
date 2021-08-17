import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
    fixture = TestBed.createComponent(AppComponent)
  })

  it('should create the app', () => {
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'live'`, () => {
    const app = fixture.componentInstance
    expect(app.title).toEqual('live')
  })

  it('should render cursor', () => {
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('tng-cursor')).toBeTruthy()
  })

  it('should change css variable property color', () => {
    const color = '#fff'
    const app = fixture.componentInstance
    app.setColor(color)
    expect(document.documentElement.style.getPropertyValue('--my-color')).toBe(
      color,
    )
  })
})
