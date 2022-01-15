import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-medium is-bold">
    <app-hamburger></app-hamburger>
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            Earthquakes Atlas
          </h1>
          <h1 class="subtitle has-text-centered">
          (1900.-2021.)
          </h1>
          <p class="subtitle has-text-centered">
          The aim of this one-page atlas is to provide students with overview of
          earthquakes; how they came to be, how they affect us and where are they
          located. Data on display starts in the year 1900.  Before that year, data is
          scarce and inconsistent.
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
        /*Using linear gradient to make image darker */
        background-image: linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url("/assets/img/volcano.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        min-height: 500px;
      }

      .button {
        background-color: transparent;
        color: white;
        border: 1px solid white;
      }

      .button:hover {
        background-color: white;
        color: black;
        opacity: 0.5;
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
        color: white;
      }

      .container h1 {
        color: white;
      }
      @media(max-width: 800px) {
        .container {
          margin-top: 50px;
        }
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
