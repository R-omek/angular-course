import { Component, EventEmitter, Output } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html'
})
export class CarAddComponent {
  
 carName = ''

  constructor(
    private service: CarsService
  ) {}

 addCar() {
  this.service.addCar(this.carName)
  this.carName = ''
 }

}
