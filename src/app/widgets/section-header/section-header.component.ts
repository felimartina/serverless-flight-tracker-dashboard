import { Component } from '@angular/core';
import { SectionHeaderService, SectionHeaderData } from '../../services/section-header/section-header.service';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html'
})
export class SectionHeaderComponent {
  public header: SectionHeaderData;

  constructor(private sectionHeaderService: SectionHeaderService) {
    // getting the data from the services
    this.sectionHeaderService.current.subscribe((data) => {
      this.header = data;
    });
  }

}
