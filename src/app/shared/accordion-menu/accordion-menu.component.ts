import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-accordion-menu',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './accordion-menu.component.html',
  styleUrl: './accordion-menu.component.scss'
})
export class AccordionMenuComponent {
  @Input() isOpen: boolean = false;
  @Input() tittleTheme: string = '';
  @Input() textTheme: string = '';
  @Input() symptomsTheme: string = '';
  @Input() worryTheme: string = '';

  toggleContent() {
    this.isOpen = !this.isOpen;
    }
}
