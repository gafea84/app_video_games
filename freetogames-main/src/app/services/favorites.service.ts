import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: any[];

  constructor() { 
    this.favorites = localStorage.getItem('favoritesList') ? (JSON.parse(localStorage.getItem('favoritesList') || '{}')) : [];
  }

  addFavorite(game:any){
    this.favorites.push(game);
    localStorage.setItem('favoritesList', JSON.stringify(this.favorites));

  }

  getFavorites(){
    return this.favorites = localStorage.getItem('favoritesList') ? JSON.parse(localStorage.getItem('favoritesList')!) : [];
  }

  removeFavorite(gameToRemove:any){
    let index = this.favorites.findIndex(game => game.id === gameToRemove.id);
    this.favorites.splice(index, 1);
    localStorage.setItem('favoritesList', JSON.stringify(this.favorites));
  }

  isFavorite(id:number){
    return this.favorites.findIndex(game => game.id === id) >= 0 ? true : false;
  }
}
