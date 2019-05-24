import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlinesComponent } from './productlines.component';

describe('ProductlinesComponent', () => {
  let component: ProductlinesComponent;
  let fixture: ComponentFixture<ProductlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
