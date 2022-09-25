import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  // pure: false
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: any, searchStr: string, fieldName: string) {
    console.log('Filter pipe started')
    if (carList === 0 || searchStr === '') {
      return carList;
    }

    return carList.filter((car: any) => car[fieldName].toLowerCase().indexOf(searchStr.toLocaleLowerCase()) !== -1)
  }

}
