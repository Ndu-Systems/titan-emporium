/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipeJackingComponent } from './pipe-jacking.component';

describe('PipeJackingComponent', () => {
  let component: PipeJackingComponent;
  let fixture: ComponentFixture<PipeJackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeJackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeJackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
