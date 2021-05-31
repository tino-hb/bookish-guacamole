import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightModule } from 'ngx-highlightjs'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'

import { CodeSnippetComponent } from './components/code-snippet'


@NgModule({
  declarations: [
    CodeSnippetComponent,
  ],
  imports: [
    CommonModule,
    HighlightModule,
    ClipboardModule,

    // shared angular material resources
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
  ],

  exports: [
    CodeSnippetComponent,

    // shared angular material resources
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
  ],

  providers: [],
})
export class CodeModule { }
