import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  gameList: any[];

  constructor(private _gamesService: GamesService) { 
    this.gameList = [];
    this._gamesService.getGames()
      .subscribe( (data:any) => {
        this.gameList = data;
      });
  }

  ngOnInit(): void {
  }

}
