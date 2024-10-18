import { Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {TrgComponent} from "./components/service/trg/trg.component";
import {AnaliseCorporalComponent} from "./components/service/analise-corporal/analise-corporal.component";
import {TravasMentaisComponent} from "./components/service/travas-mentais/travas-mentais.component";
import {AnxietyDepressionComponent} from "./components/themes/anxiety-depression/anxiety-depression.component";
import {
  SelfEsteemSelfConfidenceComponent
} from "./components/themes/self-esteem-self-confidence/self-esteem-self-confidence.component";
import {BurnoutSyndromeComponent} from "./components/themes/burnout-syndrome/burnout-syndrome.component";
import {MaritalCrisisComponent} from "./components/themes/marital-crisis/marital-crisis.component";

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'themes/ansiedade-e-depressao', component: AnxietyDepressionComponent },
  { path: 'themes/autocuidado-e-autoestima', component: SelfEsteemSelfConfidenceComponent },
  { path: 'themes/burnout-e-sindrome-do-panico', component: BurnoutSyndromeComponent },
  { path: 'themes/crise-conjugal', component: MaritalCrisisComponent},
  { path: 'services/trg', component: TrgComponent},
  { path: 'services/analise-corporal', component: AnaliseCorporalComponent},
  { path: 'services/travas-mentais', component: TravasMentaisComponent},
  { path: '**', redirectTo: 'about' }
];
