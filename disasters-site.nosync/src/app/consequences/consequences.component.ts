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
          <b>Ground Rupture</b> is another important effect of earthquakes which occurs when the earthquake movement along a fault actually breaks the Earth's surface. Rupture causes problems for humans by, well, rupturing things; pipelines, tunnels, aqueducts, railway lines, roads, and airport runways which cross an area of active rupture can easily be destroyed or severely damaged. 
          <br>
          <b>Landslides</b> are caused by earthquakes both by direct rupture and by sustained shaking of unstable slopes. They can easily destroy buildings in their path, or block roads and railroad lines, or take hilltop homes with them as they tumble.
          <br>
          <b>Tsunamis</b> , which are popularly -- and incorrectly -- known as "tidal waves", are a grave hazard to many parts of the world, particularly around the Pacific Ocean basin. Tsunamis are a series of water waves caused when the seafloor moves vertically in an earthquake and which can travel vast distances in a short period of time. Tsunami speeds in the deep ocean have been measured at more than 700 km/hr, comparable to some jet planes, and when tsunamis reach shallow water near the coast, they can reach heights of more than 27 meters (90 feet)!
          <br>
          <b>Liquefaction</b>  and subsidence of the ground are important effects which often are the cause of much destruction in earthquakes, particularly in unconsolidated ground. Liquefaction is when sediment grains are literally made to float in groundwater, which causes the soil to lose all its solidity. Subsidence can then follow as the soil recompacts. Sand blows, or sand volcanoes, form when pressurized jets of groundwater break through the surface. They can spray mud and sand over an area a few meters across. All of these effects pose a grave danger to buildings, roads, train lines, airport runways, gas lines, etc.
          <br>
          <b>Fires</b> are a major source of damage after earthquakes. Ground rupture and liquefaction can easily rupture natural gas mains and water mains, both contributing to the ignition of fires and hindering the efforts to control them.

        </p>
 
      </div>
      </div>
  
      <div class="column is-one-fifth">
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
            Image by H.G. Wilshire, U.S. Geological Survey.
            <a>@managem</a>
            <a href="#">#newpost</a>
            <a href="#">#update</a>
            <br />
            <time datetime="2022-1-13">16:54 PM - 13 Jan 2022</time>
          </div>
        </div>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Tsunamis Effect
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
            nbcnews.
            <a>@managem</a>
            <a href="#">#newpost</a>
            <a href="#">#update</a>
            <br />
            <time datetime="2022-1-13">16:54 PM - 13 Jan 2022</time>
          </div>
        </div>
      </div>
      <div class="column is-one-fifth">
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
            Nicola Litchfield, GNS Science
            <a>@managem</a>
            <a href="#">#newpost</a>
            <a href="#">#update</a>
            <br />
            <time datetime="2022-1-13">16:54 PM - 13 Jan 2022</time>
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Liquefaction Effect
            </p>
            <div class="card-header-icon">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
            </div>
          </header>
          <div class="card-image">
            <figure class="image is-4by3">
                <img src='/assets/img/Liquefaction.jpg' style="border-radius: 0px;" width="50" />
            </figure>
          </div>
          <div class="card-content">
            static.temblor.net
            <a>@managem</a>
            <a href="#">#newpost</a>
            <a href="#">#update</a>
            <br />
            <time datetime="2022-1-13">16:54 PM - 13 Jan 2022</time>
          </div>
        </div>
      </div>

      <div class="column is-one-fifth">
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
            Deadliest Landslides Of The Century- WorldAtlas
            <a>@managem</a>
            <a href="#">#newpost</a>
            <a href="#">#update</a>
            <br />
            <time datetime="2022-1-13">16:54 PM - 13 Jan 2022</time>
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
            wildfiretoday.com
            <a>@managem</a>
            <a href="#">#newpost</a>
            <a href="#">#update</a>
            <br />
            <time datetime="2022-1-13">16:54 PM - 13 Jan 2022</time>
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
  `
  ]
})
export class ConsequencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
