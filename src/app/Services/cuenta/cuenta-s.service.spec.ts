import { TestBed } from '@angular/core/testing';

import { CuentaSService } from './cuenta-s.service';

describe('CuentaSService', () => {
  let service: CuentaSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
