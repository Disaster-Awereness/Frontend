import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            The EM-DAT Atlas
            The Georeferenced Emergency Events Database (EM-DAT)
            Centre for Research on the Epidemiology of Disasters (CRED)
          </h1>
          <p class="subtitle has-text-centered">
          The aim of the online EM-DAT atlas is to show a first overview of how geo-referenced EM-DAT data can be mapped.
          Twelve countries have their natural disasters mapped and for each country the maps are accompanied by an 
          overview of the past and current disaster situation in the country. Technological disasters are omitted from this analysis.
          When using data or figures displayed in the EM-DAT Atlas, please use appropriate sourcing:
          EM-DAT, CRED / UCLouvain, Brussels, Belgium, www.emdat.be (D. Guha-Sapir)
          Press the "Begin the story" button   
          </p>
          <div class="box has-text-centered">
          <button class="button is-outlined" (click)="onClickScroll('banner')">Begin the story</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    ` .hero {
        background-image: url('/assets/img/volcano.jpg') !important;
        background-size: cover;
        background-position: center center;
      }
      .button {
        background-color: transparent;
        color: white;
        border: 1px solid white;
      }
      .box {
        background-color: transparent;
        box-shadow: none;
      }
      .container p {
        margin-bottom: 80px;
        margin-left: 200px;
        margin-right: 200px;
        letter-spacing: 0.6px;
        line-height: 36px;
      }
      @media(max-width: 800px) {
        .container p {
        margin-left: 20px;
        margin-right: 20px;
      }
}
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementID: string): void {
    this.viewportScroller.scrollToAnchor(elementID);
  }
  ngOnInit(): void {
  }

}
