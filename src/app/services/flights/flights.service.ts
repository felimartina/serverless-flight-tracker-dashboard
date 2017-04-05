import { Injectable } from '@angular/core';
import { Flight } from '../../models/flight'

export class FlightsServiceConfig {
  apiBasePath: String = 'www.flights-buddy.com:xxx/flights';
}

@Injectable()
export class FlightsService {
  apiBasePath: String
  flights: Flight[]
  constructor(flightsServiceConfig: FlightsServiceConfig) {
    this.apiBasePath = flightsServiceConfig.apiBasePath
  }

}
