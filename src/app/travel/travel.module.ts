import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { TrainsComponent } from './trains/trains.component';
import { FlightsComponent } from './flights/flights.component';
import { BusComponent } from './bus/bus.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    TrainsComponent,
    FlightsComponent,
    BusComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }
