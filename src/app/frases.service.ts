import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import { Frase }         from './frase.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FrasesService {
  private url = '/assets/data/frases.json';
  private http: Http;

  public constructor(http: Http) {
    this.http = http;
  }

  public getFrases(): Promise<Frase[]> {
    return this.http.get(this.url)
               .toPromise()
               .then( (response) => response.json() as Frase[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
