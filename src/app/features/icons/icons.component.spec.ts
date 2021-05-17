import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { CoreModule } from '../../core/core.module'
import { SharedModule } from '../../shared/shared.module'
import { IconsComponent } from './icons.component'

describe('IconsComponent', () => {
  let component: IconsComponent
  let fixture: ComponentFixture<IconsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        IconsComponent,
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
