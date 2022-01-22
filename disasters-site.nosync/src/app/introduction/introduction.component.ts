import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  template: `
  <section class="section is-medium" id="introduction">
    <div class="columns">
      <div class="column is-two-fifths">
      <div class="content">
      <p>
        Among all of the natural disasters, earthquakes may be the one
        which comes most unexpectedly and leaves the people in affected 
        area the least time to prepare. Unlike fires or destructive weather,
        it can't be seen from a distance nor it can be accurately predicted.
        The nature of their existence has been unknown until recently. Native
        peoples around the world had different explanation for earth tremors,
        which was usually described by movement of giant animal on which Earth's
        surface rests; in Japan it was a catfish, in China a frog and in Philippines 
        a snake, while native Americans thought it to be a turtle.

      </p>
      <p>
        First scientifically sensible idea about processes which lead to 
        earthquakes came from John Michell in 1760. while he studied great
        Lisbon earthquake of 1755. Michell concluded earthquakes are caused
        by shifting of rock masses many kilometers deep inside Earth's surface.
        That idea was further developed by Benjamin Franklin in 1793. He imagined
        internal part of Earth to be more fluid, while the surface was akin
        to a hard shell moving on the top liquid inside. It wasn't until 1891. when
        strong earthquake hit Japanese island of Honshu, and created a fault line,
        making the japanese scientist Bunjiro Koto finally concluded that earthquakes
        are caused by collision of parts of Earth's crust.
      </p>
      <p>
        Later during the course of the 20th century, scientists have managed to use seismic
        waves in order to find out more about earthquakes. They deducted that Earth has melted 
        core in the center, surrounded by somewhat less dense material which comprises the "mantle"
        and on top of the mantle is thin rocky layer called "crust" on which we humans live.
      </p>
  </div>
      </div>
    <div class="column">
    <app-map></app-map>
    </div>
    </div>
    <button class="question" style= "background-color:#84b1e0; border-radius:5px;" (click)="showAnswer=!showAnswer">Can you find some of the heaviest earthquakes in recent history?</button>
      <div class="hidden" *ngIf="showAnswer">
           <br> 
           We put the answer here!
           
           Like: Some of the biggest events listed...
           <br>
           Still working on it!
      </div>
  </section>
  `,
  styles: [
    `
    .section {
      padding: 80px;
      margins: 0px;
    }

    button {
      padding: 20px;
      margins: 0px;
    }

    .hidden {
      display: block;
      font-style: italic;
      padding-left: 2em;
      margin-top: 0.5em;
      margin-bottom: 1.5em;
      }

    `
  ]
})
export class IntroductionComponent implements OnInit {

  showAnswer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
