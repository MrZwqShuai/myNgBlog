import { TestBed, inject } from '@angular/core/testing';

import { Detail.ServiceService } from './detail.service.service';

describe('Detail.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Detail.ServiceService]
    });
  });

  it('should be created', inject([Detail.ServiceService], (service: Detail.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
