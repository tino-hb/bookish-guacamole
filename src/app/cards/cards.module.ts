import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../shared/shared.module'
import { CardsRoutingModule } from './cards-routing.module'
import { CardsComponent } from './cards.component'

@NgModule({
  declarations: [
    CardsComponent,
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class CardsModule { }
