import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { CardsRoutingModule } from './cards-routing.module'
import { CardsPageComponent } from './pages/cards-page'
import { CustomCardComponent } from './components/custom-card'
import { MaterialCardComponent } from './components/material-card'

@NgModule({
  declarations: [
    // pages
    CardsPageComponent,

    // components
    CustomCardComponent,
    MaterialCardComponent,
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class CardsModule { }
