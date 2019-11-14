/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OilFreePetComponent } from './oil-free-pet.component';

describe('OilFreePetComponent', () => {
  let component: OilFreePetComponent;
  let fixture: ComponentFixture<OilFreePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilFreePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilFreePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
