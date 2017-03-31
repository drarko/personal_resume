import { Injectable }    from '@angular/core';

@Injectable()
export class ShowRouterOutlet {

    public show: boolean;

    public constructor() {
        this.show = false;
    }

    public getShow() : boolean {
        return this.show;
    }

    public guard() : boolean {
        return this.show;
    }

    public toggleContent(status) {
        this.show = !status;
        return this.show;
    }
}
