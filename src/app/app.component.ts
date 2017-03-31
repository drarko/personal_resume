import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowRouterOutlet } from './show-router-outlet.service';

@Component({
  selector: 'my-angular-resume',
  templateUrl: './templates/main.html',
})
export class AppComponent {
  private service: ShowRouterOutlet;
  private router: Router;

  public constructor( service: ShowRouterOutlet, router: Router ) {
    this.service = service;
    this.router = router;
  }

  public isShow() {
    return this.service.getShow();
  }

  public toggleContent(status) {
    this.service.toggleContent(status);
    if ( !this.service.getShow() ) {
      this.router.navigate(['']);
    }
  }
}
