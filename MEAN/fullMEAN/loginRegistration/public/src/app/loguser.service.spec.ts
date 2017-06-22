import { TestBed, inject } from '@angular/core/testing';

import { LoguserService } from './loguser.service';

describe('LoguserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoguserService]
    });
  });

  it('should be created', inject([LoguserService], (service: LoguserService) => {
    expect(service).toBeTruthy();
  }));
});
