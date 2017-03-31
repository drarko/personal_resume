import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';
import { Recomendacion } from './recomendacion.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecomendacionService {
  private url = '/assets/data/recomendaciones.json';
  private http: Http;

  public constructor(http: Http) {
    this.http = http;
  }

  public getRecomendaciones(): Promise<Recomendacion[]> {
    return this.http.get(this.url)
               .toPromise()
               .then( (response) => response.json() as Recomendacion[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
