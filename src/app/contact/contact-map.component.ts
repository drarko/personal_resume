import { Component } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';

@Component({
  selector: 'contact-map',
  templateUrl: './templates/map.html',
  styles: [`
    .sebm-google-map-container {
      height: 450px;
      min-height: 450px;
    }
  `]
})
export class ContactMapComponent {
    public lat: number;
    public lng: number;
    public zoom: number;

    public constructor() {
        this.lat = -34.568718;
        this.lng = -58.478758;
        this.zoom = 17;
    }

}
