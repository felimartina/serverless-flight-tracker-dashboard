import { NgModule } from '@angular/core';

/* Routing Module for Flights module */
import { FlightsRoutingModule } from './flights-routing.module';

/* ShareModule exports CommonModule and FormsModule (along with custom directives and pipes) */
import { SharedModule } from '../../shared/shared.module';

import { FlightsListComponent } from './flights-list/flights-list.component';

@NgModule({
  imports: [
    SharedModule,
    FlightsRoutingModule
  ],
  declarations: [FlightsListComponent]
})
export class FlightsModule { }
