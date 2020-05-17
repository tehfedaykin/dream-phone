import { Component } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'dream-phone';

  constructor(private cardService: CardsService) {

  }

  startGame() {
    this.cardService.getCards().subscribe((cards) => {
      console.log(cards);
    });
  }
}
