import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  template: `
    <section class="section is-medium" id="topcountries">
    <div class="columns">
      <div class="column is-two-fifths">
      <div class="content">
      <p>
        The number of deaths from natural disasters can be highly variable from year-to-year; some years pass with very few deaths before a large disaster event claims many lives.
        If we look at the average over the past decade, approximately 60,000 people globally died from natural disasters each year. This represents 0.1% of global deaths.
      </p>
      <p>
        In the visualizations shown here we see the annual variability in the number and share of deaths from natural disasters in recent decades.
        What we see is that in many years, the number of deaths can be very low – often less than 10,000, and accounting for as low as 0.01% of total deaths. But we also see the devastating impact of shock events: the 1983-85 famine and drought in Ethiopia; the 2004 Indian Ocean earthquake and tsunami; Cyclone Nargis which struck Myanmar in 2008; and the 2010 Port-au-Prince earthquake in Haiti. All of these events pushed global disasters deaths over 200,000 – more than 0.4% of deaths in these years.
      </p>
      <p>
        Low-frequency, high-impact events such as earthquakes and tsunamis are not preventable, but such high losses of human life are. We know from historical data that the world has seen a significant reduction in disaster deaths through earlier prediction, more resilient infrastructure, emergency preparedness, and response systems.
        Those at low incomes are often the most vulnerable to disaster events: improving living standards, infrastructure and response systems in these regions will be key to preventing deaths from natural disasters in the coming decades.
      </p>
  </div>
      </div>
    <div class="column">
    <app-map></app-map>
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
export class TopCountriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
