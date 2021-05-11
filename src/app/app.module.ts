import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { CoreModule } from './core/core.module'
import { SharedModule } from "./shared/shared.module"
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app/app.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // core resources
    CoreModule,

    // shared resources
    SharedModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
