import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consequences',
  template: `
  <section class="section is-medium" id="consequences">
    <div class="columns">
      <div class="column is-two-fifths">
      <div class="content">
        <p>
          The primary effects of earthquakes are below: 
        </p>
        <ul>
          <li>Ground Shaking</li>
          <li>Ground Rupture</li>
          <li>Landslides</li>
          <li>Tsunamis</li>
          <li>Liquefaction</li>
          <li>Fires</li>
        </ul> 
        <p>
          <b>Ground Shaking</b> is a term used to describe the vibration of the ground during an earthquake. It is the most familiar effect of earthquakes. It is a result of the passage of seismic waves through the ground, and ranges from quite gentle in small earthquakes to incredibly violent in large earthquakes.
          <br>
          <br>
          <b>Ground Rupture</b> is another important effect of earthquakes which occurs when the earthquake movement along a fault actually breaks the Earth's surface. Rupture causes problems for humans by, well, rupturing things; pipelines, tunnels, aqueducts, railway lines, roads, and airport runways which cross an area of active rupture can easily be destroyed or severely damaged. 
          <br>
          <br>
          <b>Landslides</b> are caused by earthquakes both by direct rupture and by sustained shaking of unstable slopes. They can easily destroy buildings in their path, or block roads and railroad lines, or take hilltop homes with them as they tumble.
          <br>
          <br>
          <b>Tsunamis</b> , which are popularly -- and incorrectly -- known as "tidal waves", are a grave hazard to many parts of the world, particularly around the Pacific Ocean basin. Tsunamis are a series of water waves caused when the seafloor moves vertically in an earthquake and which can travel vast distances in a short period of time. Tsunami speeds in the deep ocean have been measured at more than 700 km/hr, comparable to some jet planes, and when tsunamis reach shallow water near the coast, they can reach heights of more than 27 meters (90 feet)!
          <br>
          <br>
          <b>Liquefaction</b>  and subsidence of the ground are important effects which often are the cause of much destruction in earthquakes, particularly in unconsolidated ground. Liquefaction is when sediment grains are literally made to float in groundwater, which causes the soil to lose all its solidity. Subsidence can then follow as the soil recompacts. Sand blows, or sand volcanoes, form when pressurized jets of groundwater break through the surface. They can spray mud and sand over an area a few meters across. All of these effects pose a grave danger to buildings, roads, train lines, airport runways, gas lines, etc.
          <br>
          <br>
          <b>Fires</b> are a major source of damage after earthquakes. Ground rupture and liquefaction can easily rupture natural gas mains and water mains, both contributing to the ignition of fires and hindering the efforts to control them.

        </p>
 
      </div>
      <button class="question" style= "background-color:#e4e6f0; border-radius:5px;" (click)="showAnswer=!showAnswer">What do you think is the most dangerous earthquake consequence of the ones mentioned? <br><br> <b>Click to see the answer!</b></button>
      <div class="hidden" *ngIf="showAnswer">
           <br> 
           When it comes to personal harm, the <b>ground rupture</b> causing buildings to collapse is the most dangerous threat during an Earthquake for humans! In some cases, 
           the <b>fires</b> arising from the events are even more devastating. <br>
           <br>
           Regarding consequential other natural disasters, <b>landslides and tsunamis</b> are by far the most common ones. You will see more about that later!
           
      </div>


      </div>
  
      <div class="column is-two-fifth">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Ground Shaking
            </p>
            <div class="card-header-icon">
              <span class="icon">
                  <i class="fas fa-plus"></i>
              </span>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
                <img src='/assets/img/Ground_Shaking.jpg' style="border-radius: 0px;" width="50" />
            </figure>
          </div>
          <div class="card-content">
            H.G. Wilshire
            <br/>
            <i>U.S. Geological Survey</i>
            <br/>
            <a href="https://topex.ucsd.edu/es10/es10.1997/lectures/lecture20/pics/022sr.jpeg" target="_blank">topex.ucsd.edu</a>
            
          </div>
        </div>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Land Slides Effect
            </p>
            <div class="card-header-icon">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
                <img src='/assets/img/Landslides.jpg' style="border-radius: 0px;" width="50" />
            </figure>
          </div>
          <div class="card-content">
            Deadliest Landslides
             <br/>
            <i>worldatlas</i>
            <br/>
            <a href="https://www.worldatlas.com/r/w960-q80/upload/b2/25/46/shutterstock-476772370.jpg" target="_blank">www.worldatlas.com</a>
          
          </div>
        </div>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Land Slides Effect
            </p>
            <div class="card-header-icon">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
                <img src='/assets/img/Landslides.jpg' style="border-radius: 0px;" width="50" />
            </figure>
          </div>
          <div class="card-content">
            Deadliest Landslides
             <br/>
            <i>worldatlas</i>
            <br/>
            <a href="https://www.worldatlas.com/r/w960-q80/upload/b2/25/46/shutterstock-476772370.jpg" target="_blank">www.worldatlas.com</a>
          
          </div>
        </div>




      </div>
      <div class="column is-two-fifth">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
                Ground Rupture
            </p>
            <div class="card-header-icon">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
                <img src='/assets/img/Ground_Rupture.jpg' style="border-radius: 0px;" width="50" />
            </figure>
          </div>
          <div class="card-content">
            Nicola Litchfield, 
             <br/>
            <i>GNS Science</i>
            <br/>
            <a href="https://www.gns.cri.nz/var/ezwebin_site/storage/images/home/news-and-events/media-releases/strongest-ground-shaking-in-nz/the-hundalee-fault/67312-1-eng-GB/The-Hundalee-Fault.jpg" target="_blank">gns.cri.nz</a>
          
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Tsunamis
            </p>
            <div class="card-header-icon">
              <span class="icon">
                  <i class="fas fa-plus"></i>
              </span>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
                <img src='/assets/img/Tsunamis.jpg' style="border-radius: 0px;" width="50" />
            </figure>
          </div>
          <div class="card-content">
            Mainichi Shimbun
            <br/>
            <i>nbcnews</i>
            <br/>
            <a href="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_49/2669406/181204-japan-tsunami-earthquake-cs-920a.jpg" target="_blank">nbcnews.com</a>
          
          </div>
 
        </div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Fires Effect
            </p>
            <div class="card-header-icon">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
                <img src='/assets/img/Fires.jpg' style="border-radius: 0px;" width="50" />
            </figure>
          </div>
          <div class="card-content">
            Earthquake fires 6
             <br/>
            <i>Wildfire Today</i>
            <br/>
            <a href="https://www.worldatlas.com/r/w960-q80/upload/b2/25/46/shutterstock-476772370.jpg" target="_blank">www.worldatlas.com</a>
          
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

  button {
    padding: 20px;
    margins: 0px;
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
export class ConsequencesComponent implements OnInit {
  showAnswer: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
