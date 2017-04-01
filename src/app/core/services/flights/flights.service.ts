import { Injectable } from '@angular/core';

export class FlightsServiceConfig {
  apiBasePath: String = 'www.flights-buddy.com:xxx/flights';
}

@Injectable()
export class FlightsService {
  apiBasePath: String
  constructor(flightsServiceConfig: FlightsServiceConfig) {
    this.apiBasePath = flightsServiceConfig.apiBasePath
  }

}
