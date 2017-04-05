import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../../services/flights/flights.service'
import { Flight } from '../../../models/flight'

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {
  public flights: Flight[]
  constructor(flightsService: FlightsService) {
    this.flights = flightsService.flights;
  }

  ngOnInit() {
  }

}
