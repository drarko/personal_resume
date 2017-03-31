import { Component, OnInit } from '@angular/core';
import { FrasesService }     from './frases.service';
import { Frase }             from './frase.model';

@Component({
  selector: 'my-slider',
  templateUrl: './templates/slider.html',
})
export class SliderComponent implements OnInit {
  public loaded: boolean;
  private frases: Frase[];
  private service: FrasesService;

  public constructor(service: FrasesService) {
    this.service = service;
    this.loaded = false;
  }

  public getFrase() {
    return this.frases[0];
  }

  public ngOnInit() {
    this.service.getFrases().then((frases) => {
      this.frases = frases;
      this.loaded = true;
      setInterval(() => this.rotateFrase(), 5000);
    });
  }

  private rotateFrase() {
    this.frases.push(this.frases.shift());
  }
}
