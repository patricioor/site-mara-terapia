import { Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {TrgComponent} from "./components/service/trg/trg.component";
import {AnaliseCorporalComponent} from "./components/service/analise-corporal/analise-corporal.component";
import {TravasMentaisComponent} from "./components/service/travas-mentais/travas-mentais.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'services/trg', component: TrgComponent},
  { path: 'services/analise-corporal', component: AnaliseCorporalComponent},
  { path: 'services/travas-mentais', component: TravasMentaisComponent},
  { path: '**', redirectTo: 'about' }
];
