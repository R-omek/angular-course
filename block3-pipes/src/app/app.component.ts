import { Component } from '@angular/core';
import { delay, interval, Observable, timeInterval, timeout } from 'rxjs';
import  'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class='col-xs-8 col-xs-offset-2 container' [style]="{'text-align': 'center'}">
    <br>
    <h1>{{ asyncTitle | async }}</h1>
    <input type="text" class="form-control" [(ngModel)]='searchCar'>
    <button class="btn btn-primary" (click)="addCar()">Add</button>
    <br>
      <ul class="list-group">
        <li class="list-group-item"
        *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index"
        ><b>{{ i + 1 }}.</b> {{ car.name }} <i>{{ car.descr }}</i></li>
      </ul>
    </div>
  `
})
export class AppComponent {
  searchCar = ''
  cars = [
    {name: 'Ford', descr: 'text1'},
    {name: 'Mazda', descr: 'text2'},
    {name: 'Bentley', descr: 'text3'},
    {name: 'Audi', descr: 'text4'},
    {name: 'Mercedes', descr: 'text5'},
    {name: 'BMW', descr: 'text6'}
  ]

  asyncTitle = new Observable()
  ngOnInit() {
    this.asyncTitle.pipe(
      
    )
  }

  addCar() {
    this.cars.push({
      name: 'new CAR',
      descr: 'descr'
    })
  }
}
