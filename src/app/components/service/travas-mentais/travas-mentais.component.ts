import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../../shared/whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-travas-mentais',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        WhatsappButtonComponent
    ],
  templateUrl: './travas-mentais.component.html',
  styleUrl: './travas-mentais.component.scss'
})
export class TravasMentaisComponent {

}
