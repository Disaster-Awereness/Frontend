import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-medium is-bold">
    <app-hamburger></app-hamburger>
    <div class="github">
    <a href="https://github.com/Disaster-Awereness/Frontend" target="_blank"><fa-icon [icon]="faGithub"></fa-icon></a>
    </div>
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
        margin-left: 270px;
        margin-right: 270px;
        letter-spacing: 0.6px;
        line-height: 36px;
        color: white;
        font-weight: 200;
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
      .github {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 2;
        color: grey;
        font-size: 30px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  faGithub = faGithub;

  constructor(private viewportScroller: ViewportScroller) { }

  onClickScroll(elementID: string): void {
    this.viewportScroller.scrollToAnchor(elementID);
  }
  ngOnInit(): void {
  }

}
