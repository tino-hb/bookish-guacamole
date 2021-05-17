import { Component } from '@angular/core'

import { NotificationService } from '@ui/services/notification.service'
import { ComponentTemplate } from '@shared/code/template'
import htm from '!!raw-loader!./material-card.component.html'

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: [
    './material-card.component.scss',
  ],

  providers: [
    { provide: ComponentTemplate, useExisting: MaterialCardComponent },
  ],
})
export class MaterialCardComponent implements ComponentTemplate {
  templateText = htm

  constructor(
    private notificationService: NotificationService,
  ) {
  }

  onLikeButtonClick (): void {
    this.notificationService.default('Cuddle me', 3500)
  }
}
