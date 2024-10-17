import { Component } from '@angular/core';
import {HeaderComponent} from "../../../shared/header/header.component";
import {WhatsappButtonComponent} from "../../../shared/whatsapp-button/whatsapp-button.component";
import {FooterComponent} from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-anxiety-depression',
  standalone: true,
  imports: [
    HeaderComponent,
    WhatsappButtonComponent,
    FooterComponent
  ],
  templateUrl: './anxiety-depression.component.html',
  styleUrl: './anxiety-depression.component.scss'
})
export class AnxietyDepressionComponent {

}
