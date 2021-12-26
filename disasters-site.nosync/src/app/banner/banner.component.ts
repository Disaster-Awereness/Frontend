import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-banner',
  template: `
  <section class="section" id="banner">
    <div class="banner">
      <h1 class="title">Natural disasters kill on average 60,000 people per year and are responsible for 0.1% of global deaths
      </h1>
    </div>
  </section>
  `,
  styles: [`
  .section {
    background-color: #E3F2FD;
  }
  .banner {
    padding: 10px;
  }
  `]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
