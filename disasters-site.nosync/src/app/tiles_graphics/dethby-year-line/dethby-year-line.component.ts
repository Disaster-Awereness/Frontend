import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  colors: any;
  toolbar: any;
};

import { YearData, Deaths } from './data';

@Component({
  selector: 'app-dethby-year-line',
  template: `
    <p>
      dethby-year-line works!
    </p>
    <apx-chart
  [series]="chart1options.series"
  [chart]="chart1options.chart"
  [colors]="chart1options.colors"
  [yaxis]="chart1options.yaxis"
  [dataLabels]="chart1options.dataLabels"
  [markers]="chart1options.markers"
  [stroke]="chart1options.stroke"
  [xaxis]="chart1options.xaxis"
  [tooltip]="chart1options.tooltip"
  [title]="chart1options.title"
></apx-chart>
  `,
  styles: [
    `ul {
      text-align: center;
    }`
  ]
})
export class DethbyYearLineComponent {

  public chart1options!: ChartOptions;

  constructor() { 
    this.initCharts();
  }

  public initCharts(): void {
    this.chart1options = {
      series: [
        {
          name: "Deaths",
          data: Deaths
        }
      ],
      chart: {
        id: "Deaths",
        group: "social",
        type: "area",
        height: 200
      },
      colors: ["#000000"],
      yaxis: {
        tickAmount: 5  ,
        labels: {
          minWidth: 40
        },
        title: {
          text: "Deaths"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
        width: 2
      },
      toolbar: {
        tools: {
          selection: true
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 7
        }
      },
      tooltip: {
        followCursor: false,
        theme: "dark",
        x: {
          show: false
        },
        marker: {
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return "";
            }
          }
        }
      },
      xaxis: {
        categories: YearData,
        tickAmount: 17,
        labels: {
          rotate: 0,
        }
      },
      title: {
        text: "Earthquake's Deaths (1900 - 2021)",
        align: "center",
        offsetX: 0
      },
    };
  }
}
