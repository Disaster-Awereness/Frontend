import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <p class="title has-text-centered">
            Natural hazards through years
          </p>
          <p class="subtitle has-text-centered">
            Earthquakes
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [
    ` .hero {
      background-image: url('/assets/img/hero-background.jpg') !important;
      background-size: cover;
      background-position: center center;
    }`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
