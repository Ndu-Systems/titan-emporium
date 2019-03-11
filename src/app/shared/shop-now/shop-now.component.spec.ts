/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopNowComponent } from './shop-now.component';

describe('ShopNowComponent', () => {
  let component: ShopNowComponent;
  let fixture: ComponentFixture<ShopNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
