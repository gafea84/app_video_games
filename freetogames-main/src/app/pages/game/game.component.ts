import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game:any;
  constructor(private _favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  addToFavorites(game:any){
    this._favoritesService.addFavorite(game);
  }
  removeFromFavorites(game:any){
    this._favoritesService.removeFavorite(game);
  }

  isFavorite(gameId:number){
    return this._favoritesService.isFavorite(gameId);

  }
}
