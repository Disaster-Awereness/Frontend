import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-norm-affect-bar',
  template: `
    <p>
      norm-affect-bar works!
    </p>
    <div class="card">
        <ngx-charts-bar-horizontal-normalized
          [view]="view"
          scheme="cool"
          [results]="multi"
          [gradient]="gradient"
          [xAxis]="showXAxis"
          [yAxis]="showYAxis"
          [legend]="showLegend"
          [legendPosition]="LegendPos"
          [showXAxisLabel]="showXAxisLabel"
          [showYAxisLabel]="showYAxisLabel"
          [xAxisLabel]="xAxisLabel"
          [yAxisLabel]="yAxisLabel"
          (select)="onSelect($event)">
        </ngx-charts-bar-horizontal-normalized>
    </div>
  `,
  styles: [
    `.card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      border-radius: 10px;
      color: #ffffff;
      width: 400px;
      height: 200px;
      margin: auto;
    }`
  ]
})
export class NormAffectBarComponent implements OnInit {

  single = [];
  multi = [];

  view: any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  LegendPos: any = 'right' ;
  showXAxisLabel = true;
  xAxisLabel = 'Proportion';
  showYAxisLabel = true;
  yAxisLabel = 'Continent';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

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