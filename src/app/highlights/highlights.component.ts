import {
  Component,
  OnInit
} from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { GameService } from '../../app/services/game.service';

@Component({
  selector: 'highlights',
  styleUrls: [ './highlights.component.scss' ],
  templateUrl: './highlights.component.html',
  providers : [GameService]
})
export class HighlightsComponent implements OnInit {
  games;
  game;
  constructor(
    private gameService: GameService
  ) {

    this.games = gameService.getGames();
    // console.log(this.games);
    // console.log(this.gameService.getGame(10).subscribe((game) => this.game = game));
    
  }

  public ngOnInit() {
    // console.log(this.gameService.getGame(10).subscribe((game) => this.game = game));
    // console.log(this.games);
  }
}
