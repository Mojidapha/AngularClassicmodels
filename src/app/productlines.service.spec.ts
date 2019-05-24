import { TestBed } from '@angular/core/testing';

import { ProductlinesService } from './productlines.service';

describe('ProductlinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductlinesService = TestBed.get(ProductlinesService);
    expect(service).toBeTruthy();
  });
});
