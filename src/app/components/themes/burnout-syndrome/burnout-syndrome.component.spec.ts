import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnoutSyndromeComponent } from './burnout-syndrome.component';

describe('BurnoutSyndromeComponent', () => {
  let component: BurnoutSyndromeComponent;
  let fixture: ComponentFixture<BurnoutSyndromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurnoutSyndromeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurnoutSyndromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
