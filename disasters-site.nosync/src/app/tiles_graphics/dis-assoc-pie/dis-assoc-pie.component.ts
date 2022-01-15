import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartData } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dis-assoc-pie',
  template: `

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
export class DisAssocPieComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Avalanche (Snow; Debris)', 'Collapse', 'Fire',
    'Flood',
    'Slide (land; mud; snow; rock)',
    'Tsunami/Tidal wave',
    'Volcanic activity',
    '(No associated/ No reported)'
  ];
  
  public doughnutChartData: MultiDataSet = [
    [0.06, 0.06, 0.97, 0.32, 10.30, 9.65, 0.26, 78.37]
    //[1, 1, 15, 5, 159, 149, 4, 1210]
  ];
  
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
