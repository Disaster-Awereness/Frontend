import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  template: `
    <section class="section is-medium" id="topcountries">
    <div class="columns">
      <div class="column is-two-fifths">
      <div class="content">
      <p>
      <br><br>
      Over the years, at global scale, earthquakes have been a persistent human risk provocking thousands of deaths. However, human impacts from earqueakes may not be only fully captured in mortality rates. They also include, injury, homelessness, and displacement, which all have a significant impact on populations, development, poverty and resilience.
      
      The impacs of earthquakes on humanity can be classified as follows:
      <p>
      <b>Injuries:</b> number of people injured is defined as “People suffering from physical injuries, trauma or an illness requiring immediate medical assistance as a direct result of an earthquake.”
      </p>
      <p>
      <b>Homelessness:</b> number of people homeless is defined as “Number of people whose house is destroyed or heavily damaged and therefore need shelter after an event.”
      </p>
      <p>
      <b>Affected:</b> number of people affected is defined as “People requiring immediate assistance during a period of emergency, i.e. requiring basic survival needs such as food, water, shelter, sanitation and immediate medical assistance.”      
      </p>
      <p>
      <b>Deaths:</b> number of deaths is defined as "People killed immediately or as consequence of the earthquake”      
      </p>
      <p>
      The number of these impacs are highly variable from year-to-year; some years pass with very few cases before a large disaster event claims many lives. Nevertheless, some years have particulary suffered more from earthquakes:
      <a href = "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1976">1976</a>, 
      <a href = "https://en.wikipedia.org/wiki/List_of_earthquakes_in_1988">1988</a>,
      <a href = "https://en.wikipedia.org/wiki/List_of_earthquakes_in_2004">2004</a>,
      <a href = "https://en.wikipedia.org/wiki/List_of_earthquakes_in_2008">2008</a>,
      <a href = "https://en.wikipedia.org/wiki/List_of_earthquakes_in_2010">2010</a>.
      
      What we observe is that for most countries the share of deaths from earthquakes are very low in most years. Often it can be zero with no loss of life. But we also see clearly the effects of low-frequency but high-impact events: in 2010, more than 70% of deaths in Haiti were the result of the Port-au-Prince earthquake.
      </p>

      <p>
      Additionally, in the early-to-mid 20th century, the annual death toll from earthquakes was high, often reaching over one million per year. In recent decades we have seen a substantial decline in numbers of injured, homeless, affected and deaths.
      This decline is impressive if we consider the current rate of population growth over this period. Nonetheless, it may be explained by the preparation and measurements taken by countries, the arise of aweraness in the community and the improvement in infrastructure.  
      </p>
    </div>
  </div>

  <div class="column">
    <br><br>
    <app-multi-chart-cons></app-multi-chart-cons>
    <app-dethby-year-line></app-dethby-year-line>
    </div>
  </div>

  <button class="question" style= "background-color:#e4e6f0; border-radius:5px;" (click)="showAnswer=!showAnswer">Are there less impacts before 1968? <br> <b>Click to see the reason!</b></button>
      <div class="hidden" *ngIf="showAnswer">
          <br> 
          <i>The visualisations show the numbers reported of people affected by earthquakes. Note that the <i> available data </i> report a series of data much complete for the last decades than for the historic estimates before 1968, which show in many ocassions no data or low tendencies in comparison with recent years. This may be caused due to the lack of reports or documentation collected to populate the data. 
          However, an increase in the number of recorded earthquakes does not mean that it was the trend over time. 
          </i>
      </div>

  </section>
  `,
  styles: [`
  .section {
    padding: 80px;
    margins: 0px;
  }

  button {
    padding: 10px;
    margins: 0px;
    width: 100%;
  }

  .hidden {
    display: block;
    font-style: italic;
    padding-left: 0em;
    margin-top: 0.5em;
    margin-bottom: 1.5em;
    }
  `
  ]
})
export class TopCountriesComponent implements OnInit {

  showAnswer: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
