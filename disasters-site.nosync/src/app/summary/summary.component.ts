import { Component, OnInit } from '@angular/core';

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
                  a condimentum vitae sapien</li><a href="#introduction">jump to section</a>
              <li>Earthquakes are consequence of tectonic movements nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien</li>
              <li>Most active earthquake areas are Indoensia etc. nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien</li>
              <li>Strongest earthquake recorded was nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien</li>
              <li>nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien</li>
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
    `
  ]
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
