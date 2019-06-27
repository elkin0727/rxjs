import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step08Component } from './step08.component';

describe('Step08Component', () => {
  let component: Step08Component;
  let fixture: ComponentFixture<Step08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
