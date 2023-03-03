import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  url  = "https://www.freetogame.com/api/games";
  gameList = [
    {
      "id": 1,
      "title": "Dauntless",
      "thumbnail": "https://www.freetogame.com/g/1/thumbnail.jpg",
      "short_description": "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
      "game_url": "https://www.freetogame.com/open/dauntless",
      "genre": "MMORPG",
      "platform": "PC (Windows)",
      "publisher": "Phoenix Labs",
      "developer": "Phoenix Labs, Iron Galaxy",
      "release_date": "2019-05-21",
      "freetogame_profile_url": "https://www.freetogame.com/dauntless"
    },
    {
      "id": 2,
      "title": "World of Tanks",
      "thumbnail": "https://www.freetogame.com/g/2/thumbnail.jpg",
      "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
      "game_url": "https://www.freetogame.com/open/world-of-tanks",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Wargaming",
      "developer": "Wargaming",
      "release_date": "2011-04-12",
      "freetogame_profile_url": "https://www.freetogame.com/world-of-tanks"
    },
    {
      "id": 3,
      "title": "Warframe",
      "thumbnail": "https://www.freetogame.com/g/3/thumbnail.jpg",
      "short_description": "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
      "game_url": "https://www.freetogame.com/open/warframe",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Digital Extremes",
      "developer": "Digital Extremes",
      "release_date": "2013-03-25",
      "freetogame_profile_url": "https://www.freetogame.com/warframe"
    },
    {
      "id": 4,
      "title": "CRSED: F.O.A.D.",
      "thumbnail": "https://www.freetogame.com/g/4/thumbnail.jpg",
      "short_description": "Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)",
      "game_url": "https://www.freetogame.com/open/crsed",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Gaijin Distribution KFT",
      "developer": "Darkflow Software",
      "release_date": "2019-12-12",
      "freetogame_profile_url": "https://www.freetogame.com/crsed"
    },
    {
      "id": 5,
      "title": "Crossout",
      "thumbnail": "https://www.freetogame.com/g/5/thumbnail.jpg",
      "short_description": "A post-apocalyptic MMO vehicle combat game! ",
      "game_url": "https://www.freetogame.com/open/crossout",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Targem",
      "developer": "Gaijin",
      "release_date": "2017-05-30",
      "freetogame_profile_url": "https://www.freetogame.com/crossout"
    },
    {
      "id": 6,
      "title": "Blade and Soul",
      "thumbnail": "https://www.freetogame.com/g/6/thumbnail.jpg",
      "short_description": "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
      "game_url": "https://www.freetogame.com/open/blade-and-soul",
      "genre": "MMORPG",
      "platform": "PC (Windows)",
      "publisher": "NCSoft",
      "developer": "NCSoft",
      "release_date": "2016-01-19",
      "freetogame_profile_url": "https://www.freetogame.com/blade-and-soul"
    },
    {
      "id": 7,
      "title": "Armored Warfare",
      "thumbnail": "https://www.freetogame.com/g/7/thumbnail.jpg",
      "short_description": "A modern team-based MMO tank game from Obsidian Entertainment.",
      "game_url": "https://www.freetogame.com/open/armored-warfare",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "My.com (Mail.ru Group)",
      "developer": "Obsidian Entertainment",
      "release_date": "2015-10-08",
      "freetogame_profile_url": "https://www.freetogame.com/armored-warfare"
    },
    {
      "id": 8,
      "title": "Trove",
      "thumbnail": "https://www.freetogame.com/g/8/thumbnail.jpg",
      "short_description": "A free to play Sandbox massively multiplayer online role-playing game! ",
      "game_url": "https://www.freetogame.com/open/trove",
      "genre": "MMORPG",
      "platform": "PC (Windows)",
      "publisher": "Trion Worlds",
      "developer": "Trion Worlds",
      "release_date": "2015-07-09",
      "freetogame_profile_url": "https://www.freetogame.com/trove"
    },
    {
      "id": 9,
      "title": "World of Warships",
      "thumbnail": "https://www.freetogame.com/g/9/thumbnail.jpg",
      "short_description": "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
      "game_url": "https://www.freetogame.com/open/world-of-warships",
      "genre": "Shooter",
      "platform": "PC (Windows)",
      "publisher": "Wargaming",
      "developer": "Wargaming",
      "release_date": "2015-07-02",
      "freetogame_profile_url": "https://www.freetogame.com/world-of-warships"
    },
    {
      "id": 10,
      "title": "ArcheAge",
      "thumbnail": "https://www.freetogame.com/g/10/thumbnail.jpg",
      "short_description": "A free-to-play, hybrid fantasy/sandbox MMORPG brought to you by Trion Worlds.",
      "game_url": "https://www.freetogame.com/open/archeage",
      "genre": "MMORPG",
      "platform": "PC (Windows)",
      "publisher": "Trion Worlds",
      "developer": "XL Games",
      "release_date": "2014-09-04",
      "freetogame_profile_url": "https://www.freetogame.com/archeage"
    }]

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(this.url);
  }
}
