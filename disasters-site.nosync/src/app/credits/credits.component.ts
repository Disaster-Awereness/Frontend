import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `

  <section class="section is-medium" id="credits">
  <div class="center">
  <button class="credits" (click)="showAnswer=!showAnswer"><h4>Credits & References</h4></button>
  </div>
  <div class="hidden" *ngIf="showAnswer">
    <h4>Literature</h4>
      <ul style="list-style-type:none;">
        <li>[1] Earthquakes in human history - Jelle Zeilinga de Boer and Donald Theodore Sanders, Princeton University Press, 2004.</li>
        <li>[2].....</li>
        <li>[3].....</li>
        <li>[4].....</li>
      </ul>
      <br>
    <h4>Images</h4>
      <ul style="list-style-type:none;">
        <li>[I] <a href="https://earthquake.usgs.gov/" target="_blank">Safety before, during and after an earthquake</a> by USGS </li>
        <li>[II].....</li>
        <li>[III].....</li>
        <li>[IV].....</li>
      </ul>
      <br>
    <h4>Data</h4>
      <ul style="list-style-type:none;">
        <li>[a] Dataset about <a href="https://public.emdat.be/" target="_blank">worldwide earthquake events</a> (EM-DAT) by CRED and UCLouvain</li>
        <li>[b] Dataset on <a href="https://data.worldbank.org/indicator/AG.LND.TOTL.K2" target="_blank">land area by country</a> by The World Bank</li>
        <li>[c] Dataset containing <a href="https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json" target="_blank">tectonic plate boundaries</a> hosted on GitHub</li>
      </ul> 
  </div>
  </section>
  `,
  styles: [
    `
    .section {
      padding: 40px;
      margins: 0px;
    }

    button {
      padding: 15px;
      margins: 0px;
      border-radius: 5px;
      background-color: #e4e6f0;
      color: #4a4a4a
      
    }

    .hidden {
      display: block;
      font-style: italic;
      font-family: "Verdana";
      padding-left: 1em;
      margin-top: 2em;
      margin-bottom: .5em;
      }

      .center {
        display: flex;
        justify-content: center;
        align-items: center
      }

      h4 {
        font-family: "Verdana";
      }
    `
  ]
})
export class CreditsComponent implements OnInit {

  showAnswer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
