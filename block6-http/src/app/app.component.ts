import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs';
import { CarsService } from './cars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  cars: any = []
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'
  ]
  appTitle: any;

  form = new FormGroup({
    carName: new FormControl('', Validators.required),
    carColor: new FormControl('', Validators.required)
  })


  constructor(
    private carsService: CarsService
  ) {}
  
  ngOnInit(): void {
    this.carsService.getTitle().subscribe(
      title => {this.appTitle = title
      this.appTitle = this.appTitle.value
    })
    
    
    this.carsService.getCars().subscribe({
      next: (cars) => this.cars = cars,
      error: (err) => alert(err) 
    })
  }

  addCar() {
    const newCar = {
      name: this.form.value.carName,
      color: this.form.value.carColor
    }
    this.carsService.addCar(newCar).pipe(
      switchMap(() => this.carsService.getCars())
    ).subscribe(
      (cars) => {
        this.cars = cars
        this.form.reset()
      }
    )
  }

  getColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1))
    return this.colors[num]
  }

  setNewColor(id: number, name: string) {
    const data = {
      name,
      id,
      color: this.getColor()
    }
    this.carsService.changeCarColor(data).pipe(
      switchMap(() => this.carsService.getCars())
    ).subscribe(cars => {
      this.cars = cars
    })
  }

  deleteCar(car: any) {
    this.carsService.deleteCar(car).pipe(
      switchMap(() => this.carsService.getCars())
    ).subscribe((cars: any) => {
      this.cars = cars
    })
  }
}
