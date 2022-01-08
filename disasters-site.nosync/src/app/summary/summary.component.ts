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
              <li>Earthquakes kill xxx people yearly nibh tortor id
                  aliquet lectus proin nibh nisl condimentum id venenatis
                  a condimentum vitae sapien</li>
                  <a href="#introduction"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>Earthquakes are consequence of tectonic movements nibh tortor id aliquet
                  lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien</li>
                  <a href="#introduction"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>Most active earthquake areas are Indoensia etc. nibh tortor id aliquet lectus proin
                  nibh nisl condimentum id venenatis a condimentum vitae sapien</li>
                  <a href="#introduction"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>Strongest earthquake recorded was nibh tortor id aliquet lectus proin nibh nisl
                  condimentum id venenatis a condimentum vitae sapien</li>
                  <a href="#introduction"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
              <li>nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a
                  condimentum vitae sapien</li>
                  <a href="#introduction"><fa-icon [icon]="faAngleDoubleDown"></fa-icon>Jump to section</a>
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
