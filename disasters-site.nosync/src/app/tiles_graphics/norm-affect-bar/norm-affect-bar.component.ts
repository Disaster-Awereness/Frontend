import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './data';

@Component({
  selector: 'app-norm-affect-bar',
  template: `
    <div class="card">
      <div #ContainerRef class="card-body">
    <ngx-charts-bar-vertical-normalized
  [view]="view"
  [scheme]="colorScheme"
  [results]="multi"
  [gradient]="gradient"
  [xAxis]="showXAxis"
  [yAxis]="showYAxis"
  [legend]="showLegend"
  [legendPosition]="legendPosition"
  [showXAxisLabel]="showXAxisLabel"
  [showYAxisLabel]="showYAxisLabel"
  [xAxisLabel]="xAxisLabel"
  [yAxisLabel]="yAxisLabel"
  (select)="onSelect($event)">
</ngx-charts-bar-vertical-normalized>
</div>
    </div>
  `,
  styles: [
]
})

export class NormAffectBarComponent {

  multi = [];
  view:any = [300, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: any = 'below';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Continent';
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Affectation';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#0000FF']
  };

  constructor() {
    Object.assign(this, { multi })
  }

  onSelect(event: any) {
    console.log(event);
  }
}