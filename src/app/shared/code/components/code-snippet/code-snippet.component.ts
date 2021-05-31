import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core'
import { Clipboard } from '@angular/cdk/clipboard'

import { ComponentTemplate } from '../../template'
import { copyAnimation } from '../../animations/copy.animations'

@Component({
  selector: "app-code-snippet",
  templateUrl: "./code-snippet.component.html",
  styleUrls: [
    './code-snippet.component.scss',
  ],
  animations: [
    copyAnimation,
  ],
})
export class CodeSnippetComponent implements AfterContentInit {
  @Input() label!: string
  @ContentChildren(ComponentTemplate) items!: QueryList<ComponentTemplate>

  componentTemplate: ComponentTemplate = { templateText: '' }
  copied: boolean = false

  constructor(
    private clipboard: Clipboard,
  ) {}

  ngAfterContentInit(): void {
    this.componentTemplate = this.items.first
  }

  onCopyCodeClick(): void {
    this.copied = this.clipboard.copy(this.componentTemplate.templateText)
    setTimeout(() => this.copied = false, 3000)
  }
}
