import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightsListComponent } from './flights-list/flights-list.component';
@NgModule({
  imports: [RouterModule.forChild([
    { path: 'flights', component: FlightsListComponent }
  ])],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }