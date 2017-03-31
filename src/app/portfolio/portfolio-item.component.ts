import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-item',
  templateUrl: './templates/item.html',
})
export class PortfolioItemComponent {
    @Input() public image: string;
    @Input() public title: string;
    @Input() public link: string;
}
