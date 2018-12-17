import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureFarmingComponent } from './agriculture-farming.component';

describe('AgricultureFarmingComponent', () => {
  let component: AgricultureFarmingComponent;
  let fixture: ComponentFixture<AgricultureFarmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgricultureFarmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgricultureFarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
