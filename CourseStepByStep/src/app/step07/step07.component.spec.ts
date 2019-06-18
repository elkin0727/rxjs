import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step07Component } from './step07.component';

describe('Step07Component', () => {
  let component: Step07Component;
  let fixture: ComponentFixture<Step07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
