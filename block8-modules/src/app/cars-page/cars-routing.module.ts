import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarPageComponent } from "./car-page/car-page.component";
import { CarsPageComponent } from "./cars-page.component";


const routes: Routes = [
    {
        path: '',
        component: CarsPageComponent,
        children: [
            { path: ':id/:name', component: CarPageComponent }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class CarsRoutingModule { }