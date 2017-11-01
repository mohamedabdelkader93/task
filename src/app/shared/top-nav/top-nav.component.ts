import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'top-nav',
  styleUrls: [ './top-nav.component.scss' ],
  templateUrl: './top-nav.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
})
export class TopNavComponent implements OnInit {
  menuState:string = 'out';
  
   toggleMenu() {
     // 1-line if statement that toggles the value:
     this.menuState = this.menuState === 'out' ? 'in' : 'out';
   }
  constructor(
    
  ) {}

  public ngOnInit() {
  }


}
