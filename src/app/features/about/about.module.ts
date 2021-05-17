import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { AboutRoutingModule } from './about-routing.module'
import { AboutPageComponent } from './pages/about-page'
import { AboutComponent } from './components/about'

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,

    // shared resources
    SharedModule,
  ],
  declarations: [
    AboutPageComponent,
    AboutComponent,
  ],
})
export class AboutModule {}
