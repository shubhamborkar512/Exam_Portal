import { TestBed } from '@angular/core/testing';

import { CategariesService } from './categaries.service';

describe('CategariesService', () => {
  let service: CategariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
