import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartData } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-death-by-cont',
  template: `
    <p>
      death-by-cont works!
    </p>
    <div style="display: block;">
      <canvas baseChart width="100%" height="100%"
        [data]="doughnutChartData"
        [labels]="doughnutChartLabels"
        [chartType]="doughnutChartType">
      </canvas>
    </div>
  `,
  styles: [
  ]
})
export class DeathByContComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: MultiDataSet = [
      [350, 450, 100],
      [50, 150, 120],
      [250, 130, 70],
    ];
    public doughnutChartType: ChartType = 'doughnut';

  constructor() { 
  }

  ngOnInit(): void {
  }

}

