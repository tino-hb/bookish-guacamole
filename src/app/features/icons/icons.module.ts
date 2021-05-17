import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { IconsRoutingModule } from './icons-routing.module'
import { IconsComponent } from './icons.component'


@NgModule({
  declarations: [
    IconsComponent,
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class IconsModule { }
