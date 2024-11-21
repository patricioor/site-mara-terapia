import {Component, Input, OnInit} from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { CardComponent } from "../../shared/card/card.component";
import {async, delay, filter} from "rxjs";
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
  styleUrls: ['./styles/about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() AboutButtonText: string = "Entre em contato comigo";
  private fragmentSubscription: Subscription = new Subscription();
  anosAtendimento: number = 0;
  horasAtendimento: number = 0;
  fimLoopAnos: boolean = true;
  fimLoopHoras: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) { }

  delayAction(delay: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve,delay))
  }

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
    this.executarLoopAnos().then();
    this.executarLoopHoras().then();
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

  async executarLoopAnos(): Promise<void> {
    while (this.fimLoopAnos) {
      if (this.anosAtendimento < 18) this.anosAtendimento++;
      if (this.anosAtendimento == 18) this.fimLoopAnos = false;
      await this.delayAction(81);
    }
  }async executarLoopHoras(): Promise<void> {
    while (this.fimLoopHoras) {
      if (this.horasAtendimento < 10) this.horasAtendimento++;
      if (this.horasAtendimento == 10) this.fimLoopHoras = false;
      await this.delayAction(150);
    }
  }

  navigateAboutMe(): void {
    this.router.navigate(["about-me"]);
  }

  navigateBlog(): void {
    this.router.navigate(["blog"]);
  }
}
