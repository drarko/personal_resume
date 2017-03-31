import { Component, Inject } from '@angular/core';
import { Router }    from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'identity-card',
  templateUrl: './templates/identity.html',
})
export class IdentityCardComponent {
    private router: Router;
    private pageScrollService: PageScrollService;
    private document: any;

    public constructor( router: Router,
                        pageScrollService: PageScrollService,
                        @Inject(DOCUMENT) document: any) {
        this.router = router;
        this.pageScrollService = pageScrollService;
        this.document = document;
    }

    public goToContact() {
        this.router.navigate(['/contact'], {fragment: 'contact-form'});
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
            document: this.document,
            scrollTarget: '#contact-form'
        });
        setTimeout(
            () => {
                this.pageScrollService.start(pageScrollInstance); },
            100);
    }
}
