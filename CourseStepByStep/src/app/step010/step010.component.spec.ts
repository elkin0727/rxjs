import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step010Component } from './step010.component';

describe('Step010Component', () => {
  let component: Step010Component;
  let fixture: ComponentFixture<Step010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
