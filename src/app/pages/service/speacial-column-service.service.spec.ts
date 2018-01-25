import { TestBed, inject } from '@angular/core/testing';

import { SpeacialColumnServiceService } from './speacial-column.service';

describe('SpeacialColumnServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeacialColumnServiceService]
    });
  });

  it('should be created', inject([SpeacialColumnServiceService], (service: SpeacialColumnServiceService) => {
    expect(service).toBeTruthy();
  }));
});
