import { TestBed } from '@angular/core/testing';

import { OrderdetailsService } from './orderdetails.service';

describe('OrderdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderdetailsService = TestBed.get(OrderdetailsService);
    expect(service).toBeTruthy();
  });
});
