/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndustriesUlMobileItemsComponent } from './industries-ul-mobile-items.component';

describe('IndustriesUlMobileItemsComponent', () => {
  let component: IndustriesUlMobileItemsComponent;
  let fixture: ComponentFixture<IndustriesUlMobileItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustriesUlMobileItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesUlMobileItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
