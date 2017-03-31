import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule }   from '@angular/forms';

import { ContactComponent }  from './contact.component';
import { ContactMapComponent }  from './contact-map.component';
import { ContactFormComponent }  from './contact-form.component';

import { ContactMailService } from './contact-mail.service';

@NgModule({
  imports:      [
                  CommonModule,
                  AgmCoreModule.forRoot({apiKey: 'AIzaSyBj6h8efuh44ZtFW8GxORnFkoII9_SOD8w'}),
                  FormsModule
                ],
  declarations: [ ContactComponent, ContactMapComponent, ContactFormComponent ],
  providers:    [ ContactMailService ]
})
export class ContactModule { }
