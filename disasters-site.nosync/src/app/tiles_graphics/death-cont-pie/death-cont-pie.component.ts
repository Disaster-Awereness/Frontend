import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-death-cont-pie',
  template: `
  
    <div #ContainerRef class="card">
      <div  class="card-body">
        <ngx-charts-advanced-pie-chart
          [view]="view"
          scheme="cool"
          [results]="single"
          [gradient]="gradient"
          (select)="onSelect($event)">
        </ngx-charts-advanced-pie-chart>
      </div>
    </div>
  `,
  styles: [`
    .card {
      width: 700px;
      height: 60%;
      border: 2px solid grey;
      background-color: white;
    }`
  ]
})
export class DeathContPieComponent implements OnInit {

  single = [];
  multi = [];

  view: any;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  gradient = true;

  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

  /* ---- Auto resize chart ---- */
  public resizeChart(width: number, height: number): void {
    this.view = [width, height]
    }

}