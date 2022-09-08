import { TestBed } from '@angular/core/testing';

import { LstCustomersService } from './lst-customers.service';

describe('LstCustomersService', () => {
  let service: LstCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LstCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
