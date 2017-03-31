import { Component, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute }  from '@angular/router';
import { ShowRouterOutlet } from './show-router-outlet.service';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'content-main',
  templateUrl: './templates/content.html',
})
export class ContentMainComponent implements AfterViewInit {
    private service: ShowRouterOutlet;
    private router: Router;
    private pageScrollService: PageScrollService;
    private document: any;

    public constructor( service: ShowRouterOutlet ,
                        router: Router,
                        pageScrollService: PageScrollService,
                        @Inject(DOCUMENT) document: any ) {
        this.service = service;
        this.router = router;
        this.pageScrollService = pageScrollService;
        this.document = document;
    }

    public ngAfterViewInit() {
        if (this.service.getShow()) {
            this.router.navigate(['/about'], {fragment: 'main-content'});
            let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: '#main-content'
            });
            this.pageScrollService.start(pageScrollInstance);
        }
    }

    public toTop() {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(
            this.document,
            '#wrapper'
        );
        this.pageScrollService.start(pageScrollInstance);
    }
}
