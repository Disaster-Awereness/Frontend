import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-banner',
  template: `
  <section class="section" id="banner">
    <div class="banner">
      <h1 class="title"><ng-content></ng-content>
      </h1>
    </div>
  </section>
  `,
  styles: [`
  .section {
    background-color: #BBDEFB;
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
