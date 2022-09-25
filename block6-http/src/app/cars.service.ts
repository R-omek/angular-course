import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs";

@Injectable()
export class CarsService {
  constructor(
      private http: HttpClient
  ) {}

  getTitle() {
    return this.http.get('http://localhost:3000/title')
  }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    })
    return this.http.get('http://localhost:3000/cars', {
      headers
    }).pipe(
      catchError(error => {
        throw new Error("Wrong url");
      })
    )
  }

  addCar(newCar: any) {
    return this.http.post('http://localhost:3000/cars', newCar)
  }

  changeCarColor(data: any) {
    return this.http.put(`http://localhost:3000/cars/${data.id}`, data)
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`)
  }
}