import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpModule }          from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AgmCoreModule }       from 'angular2-google-maps/core';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';

/*
 * Import global assets
 */

import '../styles/styles.scss';
import '../styles/fa/font-awesome.scss';

import { AppComponent }  from './app.component';
import { SliderComponent }  from './slider.component';
import { NoneComponent }  from './none.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentMainComponent } from './content-main.component';
import { ShowRouterOutlet } from './show-router-outlet.service';
import { FrasesService } from './frases.service';

import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { KnowModule } from './know/know.module';

@NgModule({
  imports:      [
                    BrowserModule,
                    AboutModule,
                    ResumeModule,
                    KnowModule,
                    ContactModule,
                    PortfolioModule,
                    AppRoutingModule,
                    HttpModule,
                    Ng2PageScrollModule.forRoot(),
                    AgmCoreModule.forRoot({apiKey: 'AIzaSyBj6h8efuh44ZtFW8GxORnFkoII9_SOD8w'})
                ],
  declarations: [
                    AppComponent,
                    SliderComponent,
                    ContentMainComponent,
                    NoneComponent
                ],
  providers:    [ ShowRouterOutlet, FrasesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
