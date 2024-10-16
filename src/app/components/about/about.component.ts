import {Component, Input, OnInit} from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { CardComponent } from "../../shared/card/card.component";
import { filter } from "rxjs";
import { Subscription } from "rxjs";
import {CardTestimonialComponent} from "../../shared/card-testimonial/card-testimonial.component";
import {WhatsappButtonComponent} from "../../shared/whatsapp-button/whatsapp-button.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {AccordionMenuComponent} from "../../shared/accordion-menu/accordion-menu.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CardTestimonialComponent,
    WhatsappButtonComponent,
    NgOptimizedImage,
    NgIf,
    AccordionMenuComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() AboutButtonText: string = "Entre em contato comigo";
  private fragmentSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.fragmentSubscription.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.route.fragment.subscribe((fragment) => {
            if (fragment) {
              setTimeout(() => this.scrollToSection(fragment), 0);
            }
          });
        })
    );
  }
  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  navigateService(): void {
    this.router.navigate(["service"]);
  }

  navigateBlog(): void {
    this.router.navigate(["blog"]);
  }
}
