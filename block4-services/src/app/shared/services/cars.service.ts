import { Injectable } from "@angular/core"
import { ConsoleService } from "./console.service"

@Injectable() 

export class CarsService {
    constructor(
      private consoleService: ConsoleService  
    ) {}

    cars = [
        {
            name: 'Ford',
            isSold: false
        },
        {
            name: 'Mazda',
            isSold: false
        },
        {
            name: 'Mercedes',
            isSold: false
        }
    ]

    addCar(name: string) {
        this.cars.push({
            isSold: false,
            name
        })
        this.consoleService.log(`Car ${name} was added`)
    }
}