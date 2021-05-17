import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

// @ts-ignore
import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'
import { CardsModule } from '@features/cards/cards.module'

import { CardsPageComponent } from './cards-page.component'

describe('CardsPageComponent', () => {
  let component: CardsPageComponent
  let fixture: ComponentFixture<CardsPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        CardsModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        CardsPageComponent,
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
