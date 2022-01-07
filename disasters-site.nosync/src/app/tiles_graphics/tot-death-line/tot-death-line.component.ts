import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-tot-death-line',
  template: `
    <p>
      tot-death-line works!
    </p>
    <div class="card">
      <div #ContainerRef class="card-body">
        <ngx-charts-line-chart
          [view]="view"
          scheme="cool"
          [results]="multi"
          [gradient]="gradient"
          [xAxis]="showXAxis"
          [yAxis]="showYAxis"
          [legend]="showLegend"
          [showXAxisLabel]="showXAxisLabel"
          [showYAxisLabel]="showYAxisLabel"
          [xAxisLabel]="xAxisLabel"
          [yAxisLabel]="yAxisLabel"
          [autoScale]="autoScale"
          (select)="onSelect($event)">
        </ngx-charts-line-chart>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class TotDeathLineComponent implements OnInit {
  single = [];
  multi = [];

  view: any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Deaths';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
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
