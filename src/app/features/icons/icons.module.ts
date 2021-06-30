import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { IconsRoutingModule } from './icons-routing.module'
import { IconsPageComponent } from './pages/icons-page.component'


@NgModule({
  declarations: [
    // pages
    IconsPageComponent,
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,

    // shared resources
    SharedModule,
  ],
})
export class IconsModule { }
