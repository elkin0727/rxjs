import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step011Component } from './step011.component';

describe('Step011Component', () => {
  let component: Step011Component;
  let fixture: ComponentFixture<Step011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
