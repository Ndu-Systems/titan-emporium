import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesAndDisclosuresComponent } from './policies-and-disclosures.component';

describe('PoliciesAndDisclosuresComponent', () => {
  let component: PoliciesAndDisclosuresComponent;
  let fixture: ComponentFixture<PoliciesAndDisclosuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesAndDisclosuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesAndDisclosuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
