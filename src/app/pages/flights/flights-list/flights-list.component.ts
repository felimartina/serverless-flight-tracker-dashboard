import { Component, OnInit } from '@angular/core';
export { DateFormatPipe } from 'angular2-moment/date-format.pipe';
import { FlightsService, SectionHeaderService, SectionHeaderData } from '../../../services'
import { Flight } from '../../../models'

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {
  public flights: Flight[]
  constructor(flightsService: FlightsService, sectionHeaderService: SectionHeaderService) {
    this.flights = flightsService.flights;
    sectionHeaderService.set(new SectionHeaderData({
      title: 'Your Flights',
      subtitle: '',
      display: true
    }))
  }

  ngOnInit() {
  }

}
