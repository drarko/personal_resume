import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PortfolioComponent }  from './portfolio.component';
import { PortfolioItemComponent }  from './portfolio-item.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PortfolioComponent, PortfolioItemComponent ]
})
export class PortfolioModule { }
