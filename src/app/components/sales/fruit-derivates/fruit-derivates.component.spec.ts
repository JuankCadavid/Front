import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDerivatesComponent } from './fruit-derivates.component';

describe('FruitDerivatesComponent', () => {
  let component: FruitDerivatesComponent;
  let fixture: ComponentFixture<FruitDerivatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitDerivatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitDerivatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
