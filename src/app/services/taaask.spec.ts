import { TestBed } from '@angular/core/testing';

import { Taaask } from './taaask';

describe('Taaask', () => {
  let service: Taaask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Taaask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
