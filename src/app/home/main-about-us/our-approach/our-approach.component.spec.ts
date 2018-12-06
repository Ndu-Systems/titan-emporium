/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurApproachComponent } from './our-approach.component';

describe('OurApproachComponent', () => {
  let component: OurApproachComponent;
  let fixture: ComponentFixture<OurApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
