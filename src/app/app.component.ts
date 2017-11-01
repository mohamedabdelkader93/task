import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

/**
 * App Component
 * 
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
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
  template: `
  <top-nav></top-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
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
