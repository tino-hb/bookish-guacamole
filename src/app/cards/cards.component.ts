import { Component } from '@angular/core'

import { NotificationService } from '../core/ui/services/notification.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: [
    './cards.component.scss',
  ],
})
export class CardsComponent {

  constructor(
    private notificationService: NotificationService,
  ) { }

  onLikeButtonClick (): void {
    this.notificationService.default('Cuddle me', 3500)
  }
}
