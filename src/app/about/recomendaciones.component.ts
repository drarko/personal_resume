import { Component, OnInit } from '@angular/core';
import { Recomendacion } from './recomendacion.model';
import { RecomendacionService } from './recomendacion.service';

@Component({
  selector: 'my-rec',
  templateUrl: './templates/testimonio.html',
})
export class RecomendacionesComponent implements OnInit {
  public loaded: boolean;
  private service: RecomendacionService;
  private recomendaciones: Recomendacion[];

  public constructor(service: RecomendacionService) {
    this.service = service;
    this.loaded = false;
  }

  public ngOnInit() {
    this.service.getRecomendaciones().then((recs) => {
      this.recomendaciones = recs;
      this.loaded = true;
    });
  }

  public nextRec() {
    this.recomendaciones.push(this.recomendaciones.shift());
  }

  public prevRec() {
    this.recomendaciones.unshift(this.recomendaciones.pop());
  }

  public getRec() {
    return this.recomendaciones[0];
  }

}
