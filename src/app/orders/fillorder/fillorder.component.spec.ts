import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillOrderComponent } from './fillorder.component';

describe('FillorderComponent', () => {
  let component: FillOrderComponent;
  let fixture: ComponentFixture<FillOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
