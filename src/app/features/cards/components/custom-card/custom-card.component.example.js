import { Component } from '@angular/core'

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
})
export class CustomCardComponent {

  onLikeButtonClick (): void {
    console.log('Cuddle me')
  }
}
