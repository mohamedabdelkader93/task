import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Game } from "../models/game";
import 'rxjs/add/operator/map';
 
@Injectable()
export class GameService {
      games: Game[];
      game: Game;

   constructor(private http: Http) {
   }
 
   getGames(): Observable<Game[]> {
      return this.http.get("https://api.myjson.com/bins/l9pn3")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   getGame(id): Observable<Game> {
      return this.getGames()
        .map(games => games.find(game => game.id == id));
    }

}