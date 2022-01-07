import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  template: `
    <p>
      bar-chart works!
    </p>
    <div style="display: block;">
  <canvas baseChart width="100%" height="100%"
      [datasets]="barChartData"
      [labels]="barChartLabels"
      [options]="barChartOptions"
      [legend]="barChartLegend"
      [chartType]="barChartType">
  </canvas>
</div>
  `,
  styles: [
  ]
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ["00-01 h","01-02 h","02-03 h","03-04 h","04-05 h","05-06 h","06-07 h","07-08 h","08-09 h","09-10 h","10-11 h","11-12 h","12-13 h","13-14 h","14-15 h","15-16 h","16-17 h","17-18 h","18-19 h","19-20 h","20-21 h","21-22 h","22-23 h","23-24 h"];
  public barChartType: ChartType  = 'bar';
  public barChartLegend = true;
  public barChartData = [
    //{data: [66860, 792653, 1899644, 58855, 3567], label: 'Injuries'},
    //{data: [994074, 32297361, 135608292, 4788782, 1264131], label: 'Affected'},
    {data: [36,49,46,56,67,62,51,38,43,36,39,40,51,45,36,38,42,44,45,39,53,47,31,36], label: 'Earthquakes'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
