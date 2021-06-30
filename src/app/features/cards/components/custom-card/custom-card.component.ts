import { Component } from '@angular/core'

import { NotificationService } from '@ui/services/notification.service'
import { ComponentExample } from '@shared/code'
import htm from '!!raw-loader!./custom-card.component.html'
import js from '!!raw-loader!./custom-card.component.example.js'
import scss from '!!raw-loader!./custom-card.component.scss'

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: [
    './custom-card.component.scss',
  ],

  providers: [
    { provide: ComponentExample, useExisting: CustomCardComponent },
  ],
})
export class CustomCardComponent implements ComponentExample {
  templateText = htm
  controllerText = js
  styleText = scss

  constructor(
    private notificationService: NotificationService,
  ) {
  }

  onLikeButtonClick (): void {
    this.notificationService.default('Cuddle me', 350000)
  }
}
