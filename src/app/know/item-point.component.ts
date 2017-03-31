import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-point',
  templateUrl: './templates/item-point.html',
})
export class ItemPointComponent {
    @Input() public name: string;
    @Input() public percent: string;
}
