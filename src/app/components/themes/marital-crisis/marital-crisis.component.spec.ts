import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalCrisisComponent } from './marital-crisis.component';

describe('MaritalCrisisComponent', () => {
  let component: MaritalCrisisComponent;
  let fixture: ComponentFixture<MaritalCrisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaritalCrisisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritalCrisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
