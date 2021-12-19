import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeEarthquakePopup(data: any): string {
    if (data.Location) {
      return `` +
        `<div><b>Location:</b> ${data.Location}</div>` +
        `<div><b>Magnitude:</b> ${data.DisMagValu}</div>` +
        `<div><b>Year:</b> ${data.Year}</div>`
    } else {
      return `` +
        `<div><b>Location:</b> Unknown exact location in ${data.Country}!</div>` +
        `<div><b>Magnitude:</b> ${data.DisMagValu}</div>` +
        `<div><b>Year:</b> ${data.Year}</div>`
    }
  }
}
