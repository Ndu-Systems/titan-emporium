/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WoodworkingComponent } from './woodworking.component';

describe('WoodworkingComponent', () => {
  let component: WoodworkingComponent;
  let fixture: ComponentFixture<WoodworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodworkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
