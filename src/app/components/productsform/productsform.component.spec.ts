import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsformComponent } from './productsform.component';

describe('ProductsformComponent', () => {
  let component: ProductsformComponent;
  let fixture: ComponentFixture<ProductsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
