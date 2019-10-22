/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScrewMachinesComponent } from './screw-machines.component';

describe('ScrewMachinesComponent', () => {
  let component: ScrewMachinesComponent;
  let fixture: ComponentFixture<ScrewMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrewMachinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrewMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
