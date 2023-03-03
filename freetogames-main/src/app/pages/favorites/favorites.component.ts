import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesList: any[];
  constructor(private _favoritesService: FavoritesService, private router: Router) { 
    this.favoritesList = this._favoritesService.getFavorites();
  }

  ngOnInit(): void {
  }

  goBack(): void{
    this.router.navigate([".."]);
  }

}
