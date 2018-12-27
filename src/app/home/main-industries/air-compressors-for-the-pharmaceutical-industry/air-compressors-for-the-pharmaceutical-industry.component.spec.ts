/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirCompressorsForThePharmaceuticalIndustryComponent } from './air-compressors-for-the-pharmaceutical-industry.component';

describe('AirCompressorsForThePharmaceuticalIndustryComponent', () => {
  let component: AirCompressorsForThePharmaceuticalIndustryComponent;
  let fixture: ComponentFixture<AirCompressorsForThePharmaceuticalIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirCompressorsForThePharmaceuticalIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirCompressorsForThePharmaceuticalIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
