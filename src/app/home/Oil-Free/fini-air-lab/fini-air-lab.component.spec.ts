/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiniAirLabComponent } from './fini-air-lab.component';

describe('FiniAirLabComponent', () => {
  let component: FiniAirLabComponent;
  let fixture: ComponentFixture<FiniAirLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiniAirLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiniAirLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
