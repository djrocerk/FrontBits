import { TestBed } from '@angular/core/testing';

import { MovimientoSService } from './movimiento-s.service';

describe('MovimientoSService', () => {
  let service: MovimientoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimientoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
