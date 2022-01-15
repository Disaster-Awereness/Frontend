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
            The Earthquake Data Dashboard for Education
          </h1>
          <p class="subtitle has-text-centered">
          <br>
          The aim of this dashboard is to enable an extensive exploration of worldwide Earthquake events by 
          visualizing data from 1900 up to now. It is not only useful to create awareness about such kinds of 
          natural hazards, but also for educational purposes of middle-aged to high school students. For this 
          project, we looked at data about more than 1500 earthquakes occuring in over 200 different countries. 
          The unterlying source is a dataset called the EM-DAT Atlas (CRED/UCLouvain, Brussels, Belgium - D. Guha-Sapir).
          <br><br>
          To start exploration, press the "Begin the story" button   
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
        rgba(0, 0, 0, 0.8)), url("/assets/img/earthquake_picture.webp");
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
