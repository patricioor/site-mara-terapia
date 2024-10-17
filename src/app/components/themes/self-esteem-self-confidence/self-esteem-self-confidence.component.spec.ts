import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEsteemSelfConfidenceComponent } from './self-esteem-self-confidence.component';

describe('SelfEsteemSelfConfidenceComponent', () => {
  let component: SelfEsteemSelfConfidenceComponent;
  let fixture: ComponentFixture<SelfEsteemSelfConfidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfEsteemSelfConfidenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfEsteemSelfConfidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
