import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiFacadeService } from './services/ui.facade.service'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  // dynamically loaded components have to be registered here
  entryComponents: [],
  providers: [
    UiFacadeService,
  ],
  exports: [],
})
export class UiModule {
}
