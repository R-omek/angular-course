import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  tabletImages = [
    {
      src: 'assets/img/logos_youtube.svg'
    },
    {
      src: './assets/img/google.svg'
    },
    {
      src: './assets/img/all-sites.png'
    },
  ]
}