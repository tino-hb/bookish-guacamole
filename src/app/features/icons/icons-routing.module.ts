import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IconsPageComponent } from './pages/icons-page.component'

const routes: Routes = [
  { path: '', component: IconsPageComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class IconsRoutingModule { }
