/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SustainabilityServiceUlMobileItemsComponent } from './sustainability-service-ul-mobile-items.component';

describe('SustainabilityServiceUlMobileItemsComponent', () => {
  let component: SustainabilityServiceUlMobileItemsComponent;
  let fixture: ComponentFixture<SustainabilityServiceUlMobileItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustainabilityServiceUlMobileItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustainabilityServiceUlMobileItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
