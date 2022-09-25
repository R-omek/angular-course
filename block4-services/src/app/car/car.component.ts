import { Component, Input } from '@angular/core';
import { ConsoleService } from '../shared/services/console.service'
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent {

  @Input() car!: any

  constructor(
    private consoleService: ConsoleService
  ) {}
  
  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    // const service = new ConsoleService()
    this.consoleService.log(`${this.car.name}'s status = ${type}`)
    this.car.isSold = type === 'buy' ? true : false
  }

}
