import { Component } from '@angular/core';
import { ContactMailService } from './contact-mail.service';
import { Contact } from './contact.model';

@Component({
  selector: 'contact-form',
  templateUrl: './templates/form.html',
  styles: [`
    .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
    }
    .ng-touched .ng-invalid:not(form)  {
      border-left: 5px solid #a94442; /* red */
    }
  `]
})
export class ContactFormComponent {
    public contact: Contact;
    public submitted = false;
    public message: string;
    public alert: string = 'alert-success';

    private service: ContactMailService;

    public constructor( service: ContactMailService ) {
        this.service = service;
        this.contact = new Contact('', '', '', '', '');
    }

    public getClass() {
        if ( this.alert === 'alert-success' ) {
            return ['alert-success'];
        } else {
            return ['alert-danger'];
        }
    }

    public onSubmit() {
        this.message = null;
        this.service.send(this.contact).then(
            () => {
                this.message = 'Su mensaje ha sido enviado con éxito.';
                this.submitted = true;
                this.alert = 'alert-success';
            }
        ).catch(
            () => {
                this.message = 'Ocurrió un error, intente nuevamente.';
                this.submitted = false;
                this.alert = 'alert-danger';
            }
        );
    }
}
