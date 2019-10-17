import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherViewComponent } from './weather-view/weather-view.component';


const routes: Routes = [
  {
    path: '',
    component: WeatherViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
