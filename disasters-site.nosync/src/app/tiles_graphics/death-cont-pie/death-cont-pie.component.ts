import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-death-cont-pie',
  template: `
    <p>
      death-cont-pie works!
    </p>
    <div class="card">
      <div #ContainerRef class="card-body">
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
  styles: [
  ]
})
export class DeathContPieComponent implements OnInit {

  single = [];
  multi = [];

  view: any;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  gradient = false;

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