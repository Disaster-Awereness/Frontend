import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-tree-eq-country',
  template: `
    <div id="chart">
    <apx-chart
      [series]="chartOptions.series"
      [chart]="chartOptions.chart"
      [dataLabels]="chartOptions.dataLabels"
      [plotOptions]="chartOptions.plotOptions"
      [title]="chartOptions.title"
      [legend]="chartOptions.legend"
      [tooltip]="chartOptions.tooltip"
    ></apx-chart>
  </div>
  `,
  styles: [
    `#chart {
      max-width: 650px;
      margin: 35px auto;
      
    .apexcharts-tooltip {
    background: #f3f3f3;
    color: orange;
    }
    }`
  ]
})
export class TreeEqCountryComponent {

  public chartOptions:ChartOptions = {
    tooltip: { 
      enabled: true,
      fillSeriesColor: false,
      theme: 'dark'},
    series: [
      {
        data: [
          {
            x: "China",
            y:	199
          },
          {
            x: "Indonesia",
            y: 135
          },
          {
            x: "Iran" ,
            y: 131
          },
          {
            x: "Turkey",
            y: 110
          },
          {
            x: "Japan",
            y: 69
          },
          {
            x: "Peru",
            y: 53
          },
          {
            x: "USA" ,
            y: 45
          },
          {
            x: "Greece",
            y: 43
          },
          {
            x: "Italy",
            y: 43
          },
          {
            x: "Mexico",
            y: 42
          },
          {
            x: "Philippines",
            y: 40
          },
          {
            x: "Pakistan",
            y: 36
          },
          {
            x: "Afghanistan",
            y: 33
          },
          {
            x: "Taiwan",
            y: 32
          },
          {
            x: "Colombia",
            y: 30
          }
        ]
      }
    ],

    chart: {
      height: 350,
      type: "treemap",
      toolbar: {
        show: false}
    },
    title: {
    },
    dataLabels: { 
      enabled: true, 
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['#000000']
    },
    },
    plotOptions: { 
      treemap: { 
        distributed: false, 
        enableShades: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 40,
              color: '#ffffff'
            },
            {
              from: 40,
              to: 50,
              color: '#E3DAC9'
            },
            {
              from: 50,
              to: 100,
              color: '#BDA891'
            },
            {
              from: 100,
              to: 150,
              color: '#A61414'
            },
            {
              from: 150,
              to: 200,
              color: '#520B0B'
            }
          ]
        }
      }
    },
    legend: { show: true },
  };

  constructor() {}

  ngOnInit(): void {
  }

}
