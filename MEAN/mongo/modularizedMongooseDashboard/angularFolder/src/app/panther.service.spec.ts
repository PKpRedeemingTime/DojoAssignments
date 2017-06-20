import { TestBed, inject } from '@angular/core/testing';

import { PantherService } from './panther.service';

describe('PantherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PantherService]
    });
  });

  it('should be created', inject([PantherService], (service: PantherService) => {
    expect(service).toBeTruthy();
  }));
});
