import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step09Component } from './step09.component';

describe('Step09Component', () => {
  let component: Step09Component;
  let fixture: ComponentFixture<Step09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
