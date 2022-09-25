import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Cars } from '../shared/models/cars';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {

  carName = "Ford";
  carYear = 2012
  @Output() onAddCar = new EventEmitter<Cars>()

  @ViewChild('carYearInput') carYearInput!: ElementRef

  addCar(carNameEl: HTMLInputElement) {
     this.onAddCar.emit({
       name: carNameEl.value,
       year: +this.carYearInput.nativeElement.value
     })

    carNameEl.value = ''
    this.carYearInput.nativeElement.value = 2017
  }

}
