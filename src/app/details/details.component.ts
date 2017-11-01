import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game';
 
@Component({
  selector: 'item-details',
  styleUrls: ['details.component.scss'],
  templateUrl: 'details.component.html'
})
export class DetailsComponent implements OnInit {
  game: Game;
  details;
  constructor(
    public route: ActivatedRoute,
    private gameService: GameService
  ) {}

  public ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.gameService.getGame(id)
        .subscribe(game => this.game = game);
        console.log(this.details);
  }


}
