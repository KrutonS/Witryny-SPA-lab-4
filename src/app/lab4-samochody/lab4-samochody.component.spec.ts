import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4SamochodyComponent } from './lab4-samochody.component';

describe('Lab4SamochodyComponent', () => {
  let component: Lab4SamochodyComponent;
  let fixture: ComponentFixture<Lab4SamochodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lab4SamochodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4SamochodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
