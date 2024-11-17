import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/footer/footer.component";
import {HeaderComponent} from "../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../shared/whatsapp-button/whatsapp-button.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        WhatsappButtonComponent
    ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  //
}
