import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent }  from './app.component';
import { NoneComponent }  from './none.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { KnowComponent } from './know/know.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ShowRouterOutlet } from './show-router-outlet.service';

const appRoutes: Routes = [
  { path: '', component: NoneComponent },
  { path: 'about', canActivate: [ShowRouterOutlet], component: AboutComponent },
  { path: 'resume', canActivate: [ShowRouterOutlet], component: ResumeComponent },
  { path: 'portfolio', canActivate: [ShowRouterOutlet], component: PortfolioComponent },
  { path: 'knowledge', canActivate: [ShowRouterOutlet], component: KnowComponent },
  { path: 'contact', canActivate: [ShowRouterOutlet], component: ContactComponent },
  { path: '**', canActivate: [ShowRouterOutlet], component: NoneComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
