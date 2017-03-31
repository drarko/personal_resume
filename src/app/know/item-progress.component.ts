import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-progress',
  templateUrl: './templates/item-progress.html',
})
export class ItemProgressComponent {
    @Input() public name: string;
    @Input() public percent: string;
}
