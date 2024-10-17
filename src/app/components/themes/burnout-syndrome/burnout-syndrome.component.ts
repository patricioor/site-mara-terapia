import { Component } from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../../shared/whatsapp-button/whatsapp-button.component";
import {FooterComponent} from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-burnout-syndrome',
  standalone: true,
  imports: [
    HeaderComponent,
    WhatsappButtonComponent,
    FooterComponent
  ],
  templateUrl: './burnout-syndrome.component.html',
  styleUrl: './burnout-syndrome.component.scss'
})
export class BurnoutSyndromeComponent {

}
