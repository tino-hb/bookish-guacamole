import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { LayoutModule } from "@angular/cdk/layout"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatIconModule } from "@angular/material/icon"
import { MatListModule } from "@angular/material/list"
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatTabsModule } from '@angular/material/tabs'
import { MatExpansionModule } from '@angular/material/expansion'

import { CardComponent } from './components/card/card.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { CodeModule } from './code/code.module'

@NgModule({
  declarations: [
    // custom ui elements
    CardComponent,
  ],
  imports: [
    CommonModule,

    // code module
    CodeModule,

    // angular material
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],

  exports: [
    // code module
    CodeModule,

    // angular material
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    // custom ui elements
    CardComponent,
  ],
})
export class SharedModule { }
