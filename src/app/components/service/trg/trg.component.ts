import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../../shared/whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-trg',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        WhatsappButtonComponent
    ],
  templateUrl: './trg.component.html',
  styleUrl: './trg.component.scss'
})
export class TrgComponent {

}
