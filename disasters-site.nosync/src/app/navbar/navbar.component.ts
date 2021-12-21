import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
      <!--Navbar & header-->
<section class="hero is-white is-fullheight-with-navbar block">
    <div class="hero-head">
        <nav class="navbar card">
            <div class="container">
                <div class="navbar-brand is-size-1">
                    <a class="navbar-items">Earthquakes</a>
                    <span class="navbar-burger" data-target="navbarMenuHeroB">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHeroB" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active">
                            Home
                        </a>
                        <a class="navbar-item">
                            Something 1
                        </a>
                        <a class="navbar-item">
                            Something 2
                        </a>
                        <span class="navbar-item">
                            <a class="button is-info">
                                <span class="icon">
                                    <i class="fab fa-github">
                                    </i>
                                </span>
                                <span>Download Data</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <!--Intro section-->
    <div class="hero-body">
        <div class="container">
            <div class="column is v-centered">
                <div class="column is-one-third">
                    <p class="title is-1">
                        Interactive Map on Earthquake locations around globe. 
                    </p>
                    <p class="subtitle">
                        include: timeline slider, filter options for countries/regions
                    </p>
                </div>
                <div class="column is-two-thirds">
                    <img src='/assets/img/Disaster_awareness.png' alt="Banner" width="300"/>
                </div>
            </div>
        </div>
    </div>

    <div class="hero-foot">
        <nav class="tabs">
            <div class="container has-text-link">
                <ul>
                    <li>
                        <a><i class="fab fa-apple"></i></a>
                    </li>
                    <li>
                        <a><i class="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a><i class="fab fa-facebook"></i></a>
                    </li>
                    <li>
                        <a><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a><i class="fab fa-pinterest"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</section>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
