import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutModule } from '@features/about/about.module'

import { AboutPageComponent } from './about-page.component'

describe('AboutPageComponent', () => {
  let component: AboutPageComponent
  let fixture: ComponentFixture<AboutPageComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          AboutModule,
        ],
        declarations: [
          AboutPageComponent,
        ],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
