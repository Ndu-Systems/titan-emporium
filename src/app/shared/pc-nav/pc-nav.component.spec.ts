/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PcNavComponent } from './pc-nav.component';

describe('PcNavComponent', () => {
  let component: PcNavComponent;
  let fixture: ComponentFixture<PcNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
