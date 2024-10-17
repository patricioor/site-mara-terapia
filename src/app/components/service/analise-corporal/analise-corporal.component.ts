import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../../shared/whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-analise-corporal',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './analise-corporal.component.html',
  styleUrl: './analise-corporal.component.scss'
})
export class AnaliseCorporalComponent {

}
