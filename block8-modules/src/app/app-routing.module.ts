import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars-page/cars.module').then(x => x.CarsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
