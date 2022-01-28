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
        <li>[II] <a href="https://www.swedishnomad.com/wp-content/images/2019/04/Earthquake-facts.jpg" target="_blank">Earthquake magnitude scale</a> by swedishnomad </li>
        <li>[III] <a href="https://zahlenparty.de/wp-content/uploads/1976.jpg" target="_blank">Year 1976e</a> by zahlenparty </li>
        <li>[IV] <a href="https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" target="_blank">Flag of Chile</a> by wikipedia </li>
        <li>[V] <a href="https://www.bluebird-electric.net/oceanography/ocean_pictures/Pacific-Ocean-RIng-Of-Fire-Map.jpg" target="_blank">Pacific ring</a> by bluebird </li>
        <li>[VI] <a href="https://www.sos-kinderdoerfer.de/getmedia/5f7b0e66-2f26-4912-b30b-a50f8ce2186e/haiti-erdbeben-karte-C.jpg?width=260&height=173&ext=.jpg" target="_blank">Haiti's earthquake</a> by sos-kinderdoerfer </li>
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
