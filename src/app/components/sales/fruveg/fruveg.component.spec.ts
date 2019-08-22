import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruvegComponent } from './fruveg.component';

describe('FruvegComponent', () => {
  let component: FruvegComponent;
  let fixture: ComponentFixture<FruvegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruvegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
