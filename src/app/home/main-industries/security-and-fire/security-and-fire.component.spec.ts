import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndFireComponent } from './security-and-fire.component';

describe('SecurityAndFireComponent', () => {
  let component: SecurityAndFireComponent;
  let fixture: ComponentFixture<SecurityAndFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAndFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAndFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
