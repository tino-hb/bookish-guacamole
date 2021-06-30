import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { TypographyRoutingModule } from './typography-routing.module'
import { TypographyPageComponent } from './pages/typography-page.component'


@NgModule({
  declarations: [
    //pages
    TypographyPageComponent,
  ],
  imports: [
    CommonModule,
    TypographyRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class TypographyModule { }
