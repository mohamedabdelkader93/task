import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div class="container center">
      <img src="assets/img/404-error.jpg" />
    </div>
  `,
  styles: [`
    img{
      width: 100%;
    }
  `]
})
export class NoContentComponent {

}
