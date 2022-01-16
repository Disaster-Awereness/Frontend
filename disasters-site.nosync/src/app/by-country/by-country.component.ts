import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  template: `
    <section class="section is-medium" id="countries">
    <div class="columns">
      <div class="column is-two-fifths">
      <div class="content">
      <p>
        As we know that the earthquake occurance, frequequency and magnitude varies a lot locally according to seismic activity at tectonic plate boundaries, it is possible to identify countries
        that are some kind of earthquake hotspots. Looking at the choropleth map it becomes apparent, that the Carribean countries, the South-American Pacific coast, southern European regions, 
        south-eastern and central Asian countries and the Japanese islands are especially at risk of suffering from major earthquakes. This also goes in line with our knowledge about the worst 
        earthquake events in recent human history, which for example took place in Chile, Mexico, Haiti or Portugal.
      </p>
      <p>
        In contrast,
         there are also some countries that are almost at no risk of being struck by a major earthquake. Most of these countries are located within a tectonic plate where there is almost
        no seismic activityof diverging or converging plates. Many African countries for example lie on the African plate and do not face relevant risks, as well as Australia, eastern South-America or
        northern Eurasia. Of course, just looking at earthquake occurances does not reveal the true geographic pattern, as country size differs drastically. Although China has seen most earthquake events in the
        last 100 years, the size of the country makes it simply more likely to happen there. Relatively, people living in small Carribean countries or on South-east Asian islands are at a much higher risk.
      </p>
      <p>
        There are some areas that do not show data in the map, e.g. French Guiana or the Kosovo. This is mostly because of missing data, or unclear terretorial borders at the time of data measurement. 
    </p>
  </div>
      </div>
    <div class="column">
    <app-choropleth></app-choropleth>
    </div>
    </div>
  </section>
  `,
  styles: [`
  .section {
    padding: 80px;
    margins: 0px;
  }
  `
  ]
})
export class ByCountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
