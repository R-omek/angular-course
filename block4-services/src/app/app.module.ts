import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import { FormsModule } from '@angular/forms';
import { CarsService } from './shared/services/cars.service';
import { ConsoleService } from './shared/services/console.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CarsService,
    ConsoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
