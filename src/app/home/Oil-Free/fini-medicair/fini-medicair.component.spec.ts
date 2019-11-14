/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FiniMedicairComponent } from './fini-medicair.component';

describe('FiniMedicairComponent', () => {
  let component: FiniMedicairComponent;
  let fixture: ComponentFixture<FiniMedicairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiniMedicairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiniMedicairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
