import { TestBed } from '@angular/core/testing';

import { ClienteSService } from './cliente-s.service';

describe('ClienteSService', () => {
  let service: ClienteSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
