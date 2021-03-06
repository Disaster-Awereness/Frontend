import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-banner',
  template: `
  <section class="section" id="banner">
    <div class="banner">
      <h3 class="banner">&#9432; &emsp;<ng-content></ng-content>
      </h3>
    </div>
  </section>
  `,
  styles: [`
  .section {
    background-color: #cacfe6;
  }
  .banner {
    padding: 10px;
    height: 6px;
    text-align: center;
    font-family: "Verdana";
    color: #4a4a4a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
