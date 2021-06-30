import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { FormsRoutingModule } from './forms-routing.module'
import { FormsPageComponent } from './pages/forms-page.component'


@NgModule({
  declarations: [
    FormsPageComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class FormsModule { }
