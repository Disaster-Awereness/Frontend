import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexTooltip,
  ApexPlotOptions,
  ApexXAxis,
  ApexGrid
} from "ng-apexcharts";
import { YearData } from './data';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
  tooltip: ApexTooltip;
  grid: ApexGrid; 
  plotOptions: ApexPlotOptions;

};

@Component({
  selector: 'app-heat-affected-full',
  template: `
    <p>
      heat-affected-full works!
    </p>
    <div id="chart">
  <apx-chart
    [series]="chartOptions.series"
    [chart]="chartOptions.chart"
    [dataLabels]="chartOptions.dataLabels"
    [title]="chartOptions.title"
    [colors]="chartOptions.colors"
    [tooltip]="chartOptions.tooltip"
    [grid]="chartOptions.grid"
    [plotOptions] = "chartOptions.plotOptions"
 
  ></apx-chart>
</div>

  `,
  styles: [
    `#chart {
      max-width: 100%;
      margin: 35px auto;
    }`
  ]
})
export class HeatAffectedFullComponent {

  public chartOptions:ChartOptions;

  constructor() {
    this.chartOptions = {

      plotOptions: {
        heatmap: {
            radius: 2,
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            distributed: true
        }
      },
      
      tooltip: { 
        enabled: true,
        fillSeriesColor: false,
        theme: 'dark'},
        
      series: YearData,
      chart: {
        height: 200,
        type: "heatmap"
      },
      dataLabels: {
        enabled: false
      },
      colors: [
      "#F3B415",
      "#F27036",
      "#663F59",
      "#6A6E94",
      "#F3B415",
      "#F27036",
      "#663F59",
      "#6A6E94"
    ],
      title: {
        text: "HeatMap Chart (Single color)"
      },
      grid: {
        padding: {
          right: 2
        }
      }
    };
  }
}
