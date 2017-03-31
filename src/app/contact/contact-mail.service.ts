import { Injectable }    from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from './contact.model';

@Injectable()
export class ContactMailService {
  private url = '/assets/data/mail.php';
  private http: Http;
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  public constructor(http: Http) {
    this.http = http;
  }

  public send(contact: Contact): Promise<Contact> {
    let body = new URLSearchParams();
    body.append('fullname', contact.fullname);
    body.append('company', contact.company);
    body.append('email', contact.email);
    body.append('phone', contact.phone);
    body.append('message', contact.message);
    return this.http
      .post(this.url, body.toString(), {headers: this.headers})
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
