/**
 * This module holds all common modules that run at the root level (such as spinners, message toasts, and modal dialogs)
 * Refere to the following link for an explanation of why this is a good practice:
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#the-core-module
 */
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

/* App Services */
import { FlightsService } from '../services/flights/flights.service';
import { FlightsServiceConfig } from '../services/flights/flights.service';
import { UserService } from '../services/user/user.service';

/* Vendor Modules */
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

import { User, Flight, Airport } from '../models'

@NgModule({
  imports: [
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [],
  providers: [
    FlightsService,
    UserService,
  ]
})
export class CoreModule {
  /* Prevent CoreModule from being instanced multiple times.
     Refer to the following link for an explanation of why this is a good practice:
     https://angular.io/docs/ts/latest/guide/ngmodule.html#!#prevent-reimport-of-the-_coremodule_
   */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    userService: UserService,
    flightsService: FlightsService) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }

    let user1 = new User({
      avatarUrl: 'public/assets/img/user2-160x160.jpg',
      email: 'feli.martina@gmail.com',
      firstname: 'Pipe',
      lastname: 'Martina'
    });

    user1.connected = true;
    userService.setCurrentUser(user1);
    const airports = [
      new Airport({name: 'Ingeniero Travela', code: 'COR', city: 'Córdoba', country: 'Argentina'}),
      new Airport({name: 'Honolulu', code: 'HNL', city: 'Honolulu', country: 'USA'}),
    ]

    flightsService.flights = [
      new Flight({
        from: airports[0],
        to: airports[1],
        inbound: new Date(),
        outbound: null,
      }),
      new Flight({
        from: airports[0],
        to: airports[1],
        inbound: new Date(),
        outbound: new Date(),
      }),
      new Flight({
        from: airports[1],
        to: airports[0],
        inbound: new Date(),
        outbound: null,
      }),
    ]
  }

  /**
   * Allows importers to provide specifc configurations for the provided services
   * @param {FlightsServiceConfig} flightsServiceConfig
   * Refer to the following link for an explanation of why this is a good practice:
   * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#configure-core-services-with-_coremodule-forroot_
   */
  static forRoot(flightsServiceConfig: FlightsServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: FlightsServiceConfig, useValue: flightsServiceConfig }
      ]
    };
  }
}