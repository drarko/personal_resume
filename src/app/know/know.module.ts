import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { KnowComponent }  from './know.component';
import { ItemPointComponent }  from './item-point.component';
import { ItemProgressComponent }  from './item-progress.component';
import { ListComponent }  from './list.component';

import { BackendComponent }  from './backend.component';
import { FrontendComponent }  from './frontend.component';
import { InfraComponent }  from './infra.component';
import { DbaComponent }  from './dba.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
                   KnowComponent,
                   ItemProgressComponent,
                   ItemPointComponent,
                   ListComponent,
                   BackendComponent,
                   FrontendComponent,
                   InfraComponent,
                   DbaComponent
  ]
})
export class KnowModule { }
