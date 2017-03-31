import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ResumeComponent }  from './resume.component';
import { TimelineWorkComponent }  from './timeline-work.component';
import { TimelineEducationComponent }  from './timeline-education.component';
import { TimelineItemComponent }  from './timeline-item.component';
import { CursosComponent }  from './cursos.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
                    ResumeComponent,
                    TimelineItemComponent,
                    TimelineWorkComponent,
                    TimelineEducationComponent,
                    CursosComponent
                ]
})
export class ResumeModule { }
