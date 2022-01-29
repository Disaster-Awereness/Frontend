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
        <li id="introduction_ref">[1] Earthquakes in human history - Jelle Zeilinga de Boer and Donald Theodore Sanders, Princeton University Press, 2004.</li>
        <li>[2] <a href="https://en.wikipedia.org/wiki/Earthquake" target="_blank">Earthquake</a></li>
        <li>[3] <a href="https://spaceplace.nasa.gov/earthquakes/en/" target="_blank">What Is an Earthquake? | NASA Space Place – NASA Science for Kids</a></li> 
        <li>[4] <a href="https://pubs.usgs.gov/gip/earthq1/history.html" target="_blank">Earthquakes - General Interest Publication</a></li>
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
        <li>[VII] <a href="https://topex.ucsd.edu/es10/es10.1997/lectures/lecture20/pics/022sr.jpeg" target="_blank">Ground Shaking</a> by sos-kinderdoerfer </li>
        <li>[VIII] <a href="https://www.gns.cri.nz/var/ezwebin_site/storage/images/home/news-and-events/media-releases/strongest-ground-shaking-in-nz/the-hundalee-fault/67312-1-eng-GB/The-Hundalee-Fault.jpg" target="_blank">Ground Rupture</a> by sos-kinderdoerfer </li>
        <li>[IX] <a href="https://www.worldatlas.com/r/w960-q80/upload/b2/25/46/shutterstock-476772370.jpg" target="_blank">Land Slides Effect</a> by sos-kinderdoerfer </li>
        <li>[X] <a href="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_49/2669406/181204-japan-tsunami-earthquake-cs-920a.jpg" target="_blank">Tsunamis</a> by sos-kinderdoerfer </li>
        <li>[XI] <a href="https://static.temblor.net/wp-content/uploads/2015/11/liquefaction.jpg" target="_blank">Liquefaction Effect</a> by sos-kinderdoerfer </li>
        <li>[XII] <a href="https://www.worldatlas.com/r/w960-q80/upload/b2/25/46/shutterstock-476772370.jpg" target="_blank">Fires Effect</a> by sos-kinderdoerfer </li>
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
