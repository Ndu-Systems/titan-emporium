/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiniSilentAirComponent } from './fini-silent-air.component';

describe('FiniSilentAirComponent', () => {
  let component: FiniSilentAirComponent;
  let fixture: ComponentFixture<FiniSilentAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiniSilentAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiniSilentAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
