import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from './card';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private gamesSubject:BehaviorSubject<Card[]> = new BehaviorSubject([] as Card[]);
  public readonly games: Observable<Card[]> = this.gamesSubject.asObservable();
  
  url = 'http://localhost:3000/jugadores';

  constructor(private http:HttpClient) { }

  setGames(cards:Card[]){
    this.gamesSubject.next(cards);
  }
  async getPlayers(): Promise<Observable<Card[]>>{
    const data = await this.http.get<Card[]>(this.url);
    return await data ?? [];
  }

    addPlayer(name:String, posicion:String, foot: String, age:String): Observable<Card[]>{
      const headers = { 'content-type': 'application/json'} 
      const player: Card={
      "id": 26,
      "name":name,
      "posicion": posicion,
      "pie": foot,
      "edad": Number(age),
      "foto": "assets/imagesParcial/m2-card.png"
    }
    
    return  this.http.post<Card[]>(this.url,JSON.stringify(player),{'headers':headers});
  }
}
