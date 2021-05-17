import { Component } from '@angular/core'

import { NotificationService } from '@ui/services/notification.service'
import { ComponentTemplate } from '@shared/code/template'
import htm from '!!raw-loader!./custom-card.component.html'

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: [
    './custom-card.component.scss',
  ],

  providers: [
    { provide: ComponentTemplate, useExisting: CustomCardComponent },
  ],
})
export class CustomCardComponent implements ComponentTemplate {
  templateText = htm

  constructor(
    private notificationService: NotificationService,
  ) {
  }

  onLikeButtonClick (): void {
    this.notificationService.default('Cuddle me', 3500)
  }
}
