import { AnimationEvent } from '@angular/animations';
import { Component } from '@angular/core';
import { divTrigger } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [divTrigger]
})
export class AppComponent {
  isVisible = false

  onAnimationStart(event: AnimationEvent) {
    console.log('start: ', event)
  }
  onAnimationDone(event: AnimationEvent) {
    console.log('done: ', event)
  }
}
