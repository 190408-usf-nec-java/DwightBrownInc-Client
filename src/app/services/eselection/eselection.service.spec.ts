import { TestBed } from '@angular/core/testing';

import { EselectionService } from './eselection.service';

describe('EselectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EselectionService = TestBed.get(EselectionService);
    expect(service).toBeTruthy();
  });
});
