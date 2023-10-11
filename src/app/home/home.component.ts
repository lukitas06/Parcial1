import { Component,OnInit } from '@angular/core';
import { Card } from '../card';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private cardService: CardsService){}
  players :Card[] = [];
  hide:boolean= false;
  isMobile = false;
  ready:Boolean= false;
  
  ngOnInit(): void {
    // this.isMobile = this.getIsMobile();
    // window.onresize = () => {
    //   this.isMobile = this.getIsMobile();
    // };
    this.getPlayers();

  }

  getPlayers(){
    this.cardService.games.subscribe(
      response=> this.players= response
     );
  }
  addPlayer(name:String, posicion:String, foot: String, age:String){

    this.cardService.addPlayer(name,posicion,foot,age).subscribe(
      response=> console.log(response.entries)
    );
  }
}
