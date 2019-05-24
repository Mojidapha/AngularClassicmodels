import { TestBed } from '@angular/core/testing';

import { OfficesService } from './offices.service';

describe('OfficesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficesService = TestBed.get(OfficesService);
    expect(service).toBeTruthy();
  });
});
