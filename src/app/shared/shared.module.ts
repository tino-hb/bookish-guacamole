import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { LayoutModule } from "@angular/cdk/layout"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatIconModule } from "@angular/material/icon"
import { MatListModule } from "@angular/material/list"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // angular material
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],

  exports: [
    // angular material
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class SharedModule { }
