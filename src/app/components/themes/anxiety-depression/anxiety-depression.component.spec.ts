import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyDepressionComponent } from './anxiety-depression.component';

describe('AnxietyDepressionComponent', () => {
  let component: AnxietyDepressionComponent;
  let fixture: ComponentFixture<AnxietyDepressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnxietyDepressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnxietyDepressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
