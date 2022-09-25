import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px'
      })),
      state('active', style({
        width: '170px',
        height: '170px',
        backgroundColor: 'yellow'
      })),
      transition('start <=> end', animate(800)),
      transition('start => active', animate(400)),
      transition('active => end', animate(400)),
    ]),
  ]
})
export class AppComponent {
  clickedDivState = 'start'

  changeDivState() {
    this.clickedDivState = 'end'
    setTimeout(() => {
      this.clickedDivState = 'start'
    }, 3000)
  }
 
}
