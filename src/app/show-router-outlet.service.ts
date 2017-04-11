import { Injectable }    from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class ShowRouterOutlet implements CanActivate {

    public show: boolean;

    public constructor() {
        this.show = false;
    }

    public getShow(): boolean {
        return this.show;
    }

    public canActivate(): boolean {
        return this.show;
    }

    public toggleContent(status) {
        this.show = !status;
        return this.show;
    }
}
