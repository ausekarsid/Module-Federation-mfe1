import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [];

const routes: Routes = [
  // {
  //   path: "",
  //   component: ClientselectionComponent,
  // },

  // {
  //   path: "flights",
  //   loadChildren: () => import('./flights/flights.module').then(module => module.FlightsModule)
  // },
  {
    path: 'travel',
    loadChildren: () => import('./travel/travel.module').then(module => module.TravelModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
