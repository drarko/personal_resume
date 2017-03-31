import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline-item',
  templateUrl: './templates/timeline-item.html',
})
export class TimelineItemComponent {
    @Input() public date: string;
    @Input() public date2: string;
    @Input() public name: string;
    @Input() public title: string;
    @Input() public description: string[];
    @Input() public current: boolean;

    public constructor() {
        this.current = false;
    }
}
