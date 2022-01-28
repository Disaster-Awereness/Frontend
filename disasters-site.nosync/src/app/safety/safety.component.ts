import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  template: `
<section class="container p-5" id="safety">
    <div class="columns is-vcentered is-justify-content-space-evenly">
        <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Before an earthquake
                    </p>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-plus"></i>
                        </span>
                    </div>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='/assets/img/Before_Earthquake.png' style="border-radius: 0px;" width="50" />
                    </figure>
                </div>
                <div class="card-content">
                    <a>Taken from:</a> <br>
                    <a href="https://earthquake.usgs.gov/">https://earthquake.usgs.gov/</a> <br>
                    <a>@Staysafe</a>
                    <a href="#">#BeforeEarthquakes</a>
                    <a href="#">#USGS</a>
                    <br />
                    <!--time datetime="2016-1-1">16:54 PM - 6 Feb 2021</time-->
                </div>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        During an earthquake
                    </p>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-plus"></i>
                        </span>
                    </div>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='/assets/img/During_Earthquake.png' style="border-radius: 0px;" width="50" />
                    </figure>
                </div>
                <div class="card-content">
                    <a>Taken from:</a> <br>
                    <a href="https://earthquake.usgs.gov/">https://earthquake.usgs.gov/</a> <br>
                    <a>@Staysafe</a>
                    <a href="#">#DuringEarthquakes</a>
                    <a href="#">#USGS</a>
                    <br />
                    <!--time datetime="2016-1-1">16:54 PM - 6 Feb 2021</time-->
                </div>
            </div>
        </div>
        <div class="column is-one-third">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        After an earthquake
                    </p>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-plus"></i>
                        </span>
                    </div>
                </header>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src='/assets/img/After_Earthquake.png' style="border-radius: 0px;" width="50" />
                    </figure>
                </div>
                <div class="card-content">
                    <a>Taken from:</a> <br>
                    <a href="https://earthquake.usgs.gov/">https://earthquake.usgs.gov/</a> <br>
                    <a>@Staysafe</a>
                    <a href="https://earthquake.usgs.gov/">#AfterEarthquakes</a>
                    <a href="#">#USGS</a>
                    <br />
                    <!--time datetime="2016-1-1">16:54 PM - 6 Feb 2021</time-->
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
export class SafetyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
