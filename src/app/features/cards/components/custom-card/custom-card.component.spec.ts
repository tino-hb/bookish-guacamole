import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

// @ts-ignore
import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'
import { CardsModule } from '@features/cards/cards.module'

import { CustomCardComponent } from './custom-card.component'

describe('CustomCardComponent', () => {
  let component: CustomCardComponent
  let fixture: ComponentFixture<CustomCardComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          CoreModule,
          SharedModule,
          CardsModule,
          RouterTestingModule,
          NoopAnimationsModule,
        ],
        declarations: [
          CustomCardComponent,
        ],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
