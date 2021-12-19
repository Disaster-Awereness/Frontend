import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import { SelectControlValueAccessor } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  earthquakes: string = '/assets/data/earthquakes.geojson';

  constructor(
    private http: HttpClient,
    private popupService: PopupService) { }

  static scaledRadius(val: number, maxVal: number): number {
    if (val) {
    return Math.sqrt(60 * (val / maxVal));
    } else {
      return 4;
    }
  }

  //Color map for gradient.
  static getColor(d: any) {
    if (d > 6) { return '#800026' }
    if (d > 5) { return '#BD0026' }
    if (d > 4) { return '#E31A1C' }
    if (d > 3) { return '#FC4E2A' }
    if (d > 2) { return '#FD8D3C' }
    if (d > 1) { return '#FEB24C' }
    if (d > 0) { return '#FED976' }
    else       { return '#737373' }
  }

  makeEarthquakeMarkers(map: L.Map): void {
    this.http.get(this.earthquakes).subscribe((res: any) => {

      //Possible to change property that defines radius below!
      const maxMagnitude = Math.max(...res.features.map((x: any) => x.properties.DisMagValu, 0));

      //Create circle markers.
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const mag = c.properties.DisMagValu;
        const circle = L.circleMarker([lat, lon], {
          radius: MarkerService.scaledRadius(mag, maxMagnitude),
          //Stroke & fill options
          color: MarkerService.getColor(mag),
          stroke: true,
          weight: 1,
          opacity: 0.6,
          fillOpacity: 0.4,
        });

        //Bind info popups for earthquake markers and add circkes to map.
        circle.bindPopup(this.popupService.makeEarthquakePopup(c.properties));
        circle.addTo(map);
      }
    });

  }
}
