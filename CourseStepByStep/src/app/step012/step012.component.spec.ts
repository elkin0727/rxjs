import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step012Component } from './step012.component';

describe('Step012Component', () => {
  let component: Step012Component;
  let fixture: ComponentFixture<Step012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
