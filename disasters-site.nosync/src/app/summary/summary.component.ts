import { Color } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-summary',
  template: `
<section class="section is-small">
  <div class="columns">
    <div class="column is-two-fifths">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h2 class="title">Summary</h2>
            <ul style="list-style-type:disc;">
              <li>Native americans believed that Earth is being carried on a back of a giant turtle! </li>
                  <a href="#introduction"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>Scientists measure earthquake activity with a devices called seismometers!</li>
                  <a href="#definition"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>Earliest earthquake for which we have descriptive information happened in China!</li>
                  <a href="#history"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>Tsunamis caused by earthquakes can have height of more than 27 meters!</li>
                  <a href="#consequences"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>In 2010., more than 70% of deaths in Haiti were as a consequence of an earthquake!</li>
                  <a href="#topcountries"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
  `,
  styles: [
    `
    ul {
      margin-left: 2rem;
    }

    .card {
      background-color: #FFF8E1;
      border-left: 3px solid;
      border-left-color: #1565C0;

    }

    .section {
      background-color: #ECEFF1;
    }
    `
  ]
})
export class SummaryComponent implements OnInit {

  faAngleDoubleDown = faAngleDoubleDown

  constructor() { }

  ngOnInit(): void {
  }

}
