import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list"
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatTabsModule } from '@angular/material/tabs'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatMenuModule } from '@angular/material/menu'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatChipsModule } from '@angular/material/chips'

import { CardComponent } from './components/card/card.component'
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

    // basic shared angular material resources
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
  ],

  exports: [
    // code module
    CodeModule,

    // basic shared angular material resources
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,

    // custom ui elements
    CardComponent,
  ],
})
export class SharedModule { }
