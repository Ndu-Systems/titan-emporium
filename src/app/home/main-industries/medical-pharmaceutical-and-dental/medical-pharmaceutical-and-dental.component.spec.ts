import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPharmaceuticalAndDentalComponent } from './medical-pharmaceutical-and-dental.component';

describe('MedicalPharmaceuticalAndDentalComponent', () => {
  let component: MedicalPharmaceuticalAndDentalComponent;
  let fixture: ComponentFixture<MedicalPharmaceuticalAndDentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalPharmaceuticalAndDentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalPharmaceuticalAndDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
