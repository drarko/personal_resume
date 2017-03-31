import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { AboutComponent }  from './about.component';
import { AboutMySelfComponent } from './about-my-self.component';
import { IdentityCardComponent } from './identity-card.component';
import { LangComponent } from './lang.component';
import { RecomendacionesComponent } from './recomendaciones.component';
import { FactsComponent } from './facts.component';
import { RecomendacionService } from './recomendacion.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    AboutComponent,
    AboutMySelfComponent,
    IdentityCardComponent,
    LangComponent,
    RecomendacionesComponent,
    FactsComponent
 ],
 providers:     [ RecomendacionService ]
})
export class AboutModule { }
