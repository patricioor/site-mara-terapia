import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './card-testimonial.component.html',
  styleUrl: './card-testimonial.component.scss'
})
export class CardTestimonialComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() imagePath: string = '';
  @Input() buttonName: string = '';
  @Input() path: string = '';
  @Input() location: string = '';


  constructor(private router:Router) {
  }

  navigatePath(): void {
    this.router.navigate([this.path]);
  }
}
