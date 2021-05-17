import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

// @ts-ignore
import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'
import { CardsModule } from '@features/cards/cards.module'

import { MaterialCardComponent } from './material-card.component'

describe('MaterialCardComponent', () => {
  let component: MaterialCardComponent
  let fixture: ComponentFixture<MaterialCardComponent>

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
          MaterialCardComponent,
        ],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
