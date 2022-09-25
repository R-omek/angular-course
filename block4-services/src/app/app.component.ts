import { Component, OnInit } from '@angular/core';
import { CarsService } from './shared/services/cars.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  cars: any = []

  constructor(
    private service: CarsService
  ) {}  

  ngOnInit(): void {
    this.cars = this.service.cars
  }

}
