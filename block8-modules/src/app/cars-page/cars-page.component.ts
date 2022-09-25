import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  cars: any

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.cars = this.carsService.cars
  }

}
