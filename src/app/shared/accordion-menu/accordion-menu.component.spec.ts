import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionMenuComponent } from './accordion-menu.component';

describe('AccordionMenuComponent', () => {
  let component: AccordionMenuComponent;
  let fixture: ComponentFixture<AccordionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
