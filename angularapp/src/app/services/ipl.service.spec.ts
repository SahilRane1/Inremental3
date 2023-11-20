import { TestBed } from '@angular/core/testing';

import { IPLService } from './ipl.service';

describe('IPLService', () => {
  let service: IPLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
