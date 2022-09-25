import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2012,
      color: 'white'
    },
    {
      name: 'BMW',
      id: 2,
      year: 2011,
      color: 'black'
    },
    {
      name: 'Audi',
      id: 3,
      year: 2010,
      color: 'red'
    },
    {
      name: 'Mazda',
      id: 4,
      year: 2017,
      color: 'brown'
    }
  ]
}
