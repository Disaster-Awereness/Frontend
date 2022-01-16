import { Component, OnInit } from '@angular/core';

//Route for Charts chart.js 
//https://medium.com/codingthesmartway-com-blog/angular-chart-js-with-ng2-charts-e21c8262777f

@Component({
  selector: 'app-did-you-know',
  template: `

<section class="container py-6" id="didyouknow">

      <div class="tile is-ancestor">
          <div class="tile is-parent">
              <article class="tile is-child box">
                  <p class="title">Ocurrence by continent</p>
                  <p class="content">Asia has a surface of around 44,614,000 km2	(29.8% of the total land), 
                    but is the continent where most earthquakes occurr (58.5%). However, Africa with a 20.3% of the land surface
                    account only 4.8% of the total earthquakes </p>
                  <app-world-map-fusion></app-world-map-fusion>
              </article>
          </div>
          <div class="tile is-parent">
              <article class="tile is-child box has-background-grey-lighter has-text-dark">
                  <p class="title">Hotspots</p>
                  <p class="content">In the top 15 of countries with most earthquakes, Asia leads the count with 9 countries (including the top 5), followed by the Americas with 4 and 2 from Europe </p>
                  <app-tree-eq-country></app-tree-eq-country>
              </article>
          </div>
          <div class="tile is-parent">
              <article class="tile is-child box">
                  <p class="title">Associated disasters (%)</p>
                  <p class="content"> Other natural disasters can be caused by earthquakes. 
                    In a 78.37% of the cases there have not been reported associated disasters, while
                    around 10.30% of slides and 9.65% Tsunamies are the most common disasters provocked by earthquakes. </p>
                  <app-dis-assoc-pie></app-dis-assoc-pie>
              </article>
          </div>
      </div>


      <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
              <div class="tile">
                  <div class="tile is-parent is-vertical">
                      <article class="tile is-child box">
                          <p class="title">Frequency of magnitude</p>
                          <p class="content">Despite the more frequent earthquakes are classified as strong and very strong, 
                            they provoque slight damages (strong) and considerable damage to poorly built structures. Only a 1.6% of the events have been catalogued as violent or extrem</p>
                          <app-mag-eq-bar></app-mag-eq-bar>
                      </article>
                      <article class="tile is-child box has-background-grey-lighter has-text-dark">
                          <p class="title">Great earthquakes</p>
                          <p class="content">There is at least one earthquake a year on average with a magnitude of 8.0 or higher</p> 
                      </article>
                  </div>
                  <div class="tile is-parent">
                      <article class="tile is-child box">
                          <p class="title">Along the day</p>
                          <p class="content">Most earthquakes have been reported in hours when people used to sleep (3:00 - 6:00 am), which may be one of the causes of its high mortality</p>
                          <app-bar-chart></app-bar-chart>
                          <br>
                          <img src="https://www.swedishnomad.com/wp-content/images/2019/04/Earthquake-facts.jpg" alt="Italian Trulli">
                      </article>
                  </div>
              </div>

              <div class="tile is-parent">
                  <article class="tile is-child box">
                      <p class="title">Deaths distribution</p>
                      <p class="content">Asia leads the list with more deaths around the world, but the total amount of deaths caused by earthquakes does not account more than 0.03% of the total world population (7,6 billions) </p>
                      <app-death-cont-pie></app-death-cont-pie>
                  </article>
              </div>
          </div>

          <div class="tile is-parent ">
              <div class="tile is-child box has-background-grey-lighter has-text-dark">
                  <div class="box">
                    <p class="title">Human impacts</p>
                    <p class="content">Africa seems to be the continent less prepared in terms of infraestucture, 
                      46% of the people lost their houses, while Europe has lost more lives (4%) in comparisson with the other continents </p>
                    <app-norm-affect-bar></app-norm-affect-bar> 
                  </div>
                  <div class="box">
                    <p class="title">To highlight</p>
                  <ul class="list-unstyled">
                      <li class="media my-4">
                        <img class="align-self-center mr-3" src="https://zahlenparty.de/wp-content/uploads/1976.jpg" 
                        alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1"><b>Deadliest year</b></h5>
                          <i>Total deaths:</i> 277,005 people <br> <i>More affected country:</i> China - 87.3% of the deaths <br> <i>Earthquake magnitude:</i> 8 in the Richter scale.
                        </div>
                      </li>
                      <li class="media">
                        <img class="align-self-center mr-3" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1"><b>Strongest earthquake</b></h5>
                          <i>Chile:</i> 1960 <br> <i>Magnitude:</i> 10 (Richer scale) <br> <i>Disaster associated:</i> Volcanic activity and	Tsunami.
                        </div>
                      </li>
                      <li class="media">
                        <img class="align-self-center mr-3" src="https://www.bluebird-electric.net/oceanography/ocean_pictures/Pacific-Ocean-RIng-Of-Fire-Map.jpg"
                         alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1"><b>Most active zone</b></h5>
                          Almost 80% of all the planet's earthquakes occur along the rim of the Pacific Ocean.
                        </div>
                      </li>
                      <li class="media">
                        <img class="align-self-center mr-3 rounded-circle" src="https://www.sos-kinderdoerfer.de/getmedia/5f7b0e66-2f26-4912-b30b-a50f8ce2186e/haiti-erdbeben-karte-C.jpg?width=260&height=173&ext=.jpg" alt="Generic placeholder image">
                        <div class="media-body">
                          <h5 class="mt-0 mb-1"><b>More devastaded country</b></h5>
                          <i>Haiti:</i> 2010 - 225170 deaths in 2010. Around 3700000 of the people was affected (33% of the total population).   
                        </div>
                      </li>
                     
                    </ul>

                    </div>
              </div>
          </div>
      </div>
    </section>


  `,
  styles: [`
  .section {
    padding: 80px;
    margins: 0px;
  }
  /* ====== media ====== */
  .mr-3 {width:70px;}
  `
  ]
})
export class DidYouKnowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
