import {
  Component,
  OnInit
} from '@angular/core';



@Component({
  selector: 'side-nav',
  styleUrls: [ './side-nav.component.scss' ],
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent implements OnInit {

  public localState: any;
  constructor(
    
  ) {}

  public ngOnInit() {
    console.log('hello `sidenav` component');
  }


}
