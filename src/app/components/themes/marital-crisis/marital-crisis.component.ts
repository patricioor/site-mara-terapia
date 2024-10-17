import { Component } from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../../shared/whatsapp-button/whatsapp-button.component";
import {FooterComponent} from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-marital-crisis',
  standalone: true,
  imports: [
    HeaderComponent,
    WhatsappButtonComponent,
    FooterComponent
  ],
  templateUrl: './marital-crisis.component.html',
  styleUrl: './marital-crisis.component.scss'
})
export class MaritalCrisisComponent {

}
