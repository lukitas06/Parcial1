import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardsService } from './cards.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Parcial1';

  constructor(private cardService: CardsService){}
  cards: Card[]= [];

  ngOnInit(): void {
      this.getCards();
  }
  getCards(){
    this.cardService.getPlayers().then(
      (cards: Observable<Card[]>  ) => {
        cards.subscribe(
          response => this.cardService.setGames(response)
         )
      }
    )
  }
}
