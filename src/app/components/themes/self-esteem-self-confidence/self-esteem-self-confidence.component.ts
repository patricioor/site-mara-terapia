import { Component } from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../../shared/whatsapp-button/whatsapp-button.component";
import {FooterComponent} from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-self-esteem-self-confidence',
  standalone: true,
  imports: [
    HeaderComponent,
    WhatsappButtonComponent,
    FooterComponent
  ],
  templateUrl: './self-esteem-self-confidence.component.html',
  styleUrl: './self-esteem-self-confidence.component.scss'
})
export class SelfEsteemSelfConfidenceComponent {

}
