import { Component, OnInit } from '@angular/core';

//Route for Charts chart.js 
//https://medium.com/codingthesmartway-com-blog/angular-chart-js-with-ng2-charts-e21c8262777f

@Component({
  selector: 'app-tiles',
  template: `
    <!--Tiles | Services section-->
<section class="hero is-link py-4">
    <div class="hero-body">
        <p class="title">
            Main Results
        </p>
        <p class="subtitle">
            Lorem dolor ipsum amet
        </p>   
    </div>
    <app-tot-death-line></app-tot-death-line>
    <app-line-data-full></app-line-data-full>
    <app-heat-affected-full></app-heat-affected-full>
</section>

<section class="container py-6">
    <div class="tile is-ancestor">
        <div class="tile is-parent">
            <article class="tile is-child box notification is-link">
                <p class="title">Regions</p>
                <p class="subtitle">Figma/adobe XD</p>
                <p class="subtitle">Lorem ipsum ...</p>
                <app-tree-eq-country></app-tree-eq-country>
                </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Hotspots</p>
                <p class="subtitle">Lorem ipsum ...</p>
                <app-dis-assoc-pie></app-dis-assoc-pie>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <p class="title">Total Damage</p>
                <p class="subtitle">Some number</p>
                <div class="content">
                    <p>Lorem ipsum ...</p>
                </div>
                <app-eq-per-hour></app-eq-per-hour>
            </article>
        </div>
    </div>
    <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child box">
                        <p class="title">Money losses</p>
                        <p class="subtitle">Lorem ipsum...</p>
                        <app-mag-eq-bar></app-mag-eq-bar>
                    </article>
                    <article class="tile is-child box">
                        <p class="title">Dataset</p>
                        <p class="subtitle">Lorem ipsum...</p>
                        <app-bar-chart></app-bar-chart>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Affected people</p>
                        <p class="subtitle">Some numbers</p>
                        <app-norm-affect-bar></app-norm-affect-bar>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box notification is-link">
                    <p class="title">Deaths</p>
                    <div class="content">
                        <p>Lorem ipsum dolor...</p>
                    </div>
                    <app-death-cont-pie></app-death-cont-pie>
                </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box">
                <div class="content">
                  <p class="title">Main Findings</p>
                  <p class="subtitle">Front End Development</p>
                    <div class="content">
                      <p>Starting this year, emphasis is being placed on establishment of national SMID teams as part of the disaster management arrangements</p>
 
                      <p>Starting this year, emphasis is being placed on establishment of national SMID teams as part of the disaster management arrangements</p>
                      <app-bar-chart-fusion></app-bar-chart-fusion>
                      <p>Starting this year, emphasis is being placed on establishment of national SMID teams as part of the disaster management arrangements</p>
                      <app-world-map-fusion></app-world-map-fusion>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>
  `,
  styles: [
  ]
})
export class TilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
