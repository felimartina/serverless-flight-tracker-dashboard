import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Main Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Core Module imports main services and common features that run at root level*/
import { CoreModule } from './core/core.module';

/* Feature modules */
import { FlightsModule } from './flights/flights.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FlightsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
