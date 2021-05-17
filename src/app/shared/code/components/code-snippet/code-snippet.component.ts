import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core'
import { ComponentTemplate } from '../../template'

@Component({
  selector: "app-code-snippet",
  templateUrl: "./code-snippet.component.html",
  styleUrls: [
    './code-snippet.component.scss',
  ],
})
export class CodeSnippetComponent implements AfterContentInit {
  @Input() label!: string
  @ContentChildren(ComponentTemplate) items!: QueryList<ComponentTemplate>

  componentTemplate: ComponentTemplate = { templateText: '' }

  constructor(
  ) {}

  ngAfterContentInit(): void {
    this.componentTemplate = this.items.first
  }
}
