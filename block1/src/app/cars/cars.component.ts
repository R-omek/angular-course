import { Component, ViewEncapsulation } from '@angular/core';
import { __values } from 'tslib';
import { Cars } from '../shared/models/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

 
  cars: Cars[] = [
    {
      name: 'Ford',
      year: 2015
    },
    // {
    //   name: 'Audi',
    //   year: 2018
    // },
    // {
    //   name: 'BMW',
    //   year: 2019
    // },
    // {
    //   name: 'Mazda',
    //   year: 2012
    // },
    // {
    //   name: 'McLaren',
    //   year: 2010
    // }
  ]
 
  updateCarList(car: any) {
    this.cars.push(car)
    console.log(car)
  }

  changeCarName() {
    this.cars[0].name = 'New car name!'
  }

  deleteCar() {
    this.cars.splice(0, 1)
  }
}
