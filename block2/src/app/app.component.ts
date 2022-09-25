import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerText = 'Creating your own directive'
  items = [1, 2, 3, 4, 5]
  curr = 1
  
  onClick(number: number) {
    this.curr = number
  }
}
