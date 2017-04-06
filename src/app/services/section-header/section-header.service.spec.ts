import { TestBed, inject } from '@angular/core/testing';

import { SectionHeaderService } from './section-header.service';

describe('SectionHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionHeaderService]
    });
  });

  it('should ...', inject([SectionHeaderService], (service: SectionHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
