import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";
import { YearData, Injuries, Deaths, Homeless, Affected } from './data';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-line-data-full',
  template: `
    <p>
      line-data-full works!
    </p>
    <div id="chart">
  <apx-chart
    [series]="chartOptions.series"
    [chart]="chartOptions.chart"
    [xaxis]="chartOptions.xaxis"
    [stroke]="chartOptions.stroke"
    [yaxis]="chartOptions.yaxis"
    [dataLabels]="chartOptions.dataLabels"
    [title]="chartOptions.title"
    [tooltip]="chartOptions.tooltip"
    [legend]="chartOptions.legend"
  ></apx-chart>
</div>
  `,
  styles: [`
  #chart {
      max-width: 100%;
      margin: 35px auto;
      background: white;
  }
  `]
})
export class LineDataFullComponent implements OnInit {

  public chartOptions:ChartOptions = {

    series: [
      {
        name: "Injuries",
        type: "line",
        data: Injuries
      },
      {
        name: "Deaths",
        type: "line",
        data: Deaths
      },
      {
        name: "Homeless",
        type: "line",
        data: Homeless
      },
      {
        name: "Affected",
        type: "line",
        data: Affected
      }      
      //,{
        //  name: "Cashflow",
        //  type: "column",
        //  data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        //},
    ],
    tooltip: {
      enabled: true,
      theme: 'dark'
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    },
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2, 2, 2, 2]
    },
    title: {
      text: "Earthquake's Affectations (1992 - 2021)",
      align: "left",
      offsetX: 90
    },
    xaxis: {
      categories: YearData
    },
    yaxis: [
      {
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: true,
          color: "#464d52"
        },
        labels: {
          style: {
            colors: "#464d52"
          }
        },
        title: {
          text: "",
          style: {
            color: "#464d52"
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: "Injuries",
        opposite: false,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#2E93fA"
        },
        labels: {
          style: {
            colors: "#2E93fA"
          }
        },
        title: {
          text: "Injures",
          style: {
            color: "#2E93fA"
          }
        }
      },
      {
        seriesName: "Deaths",
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#66DA26"
        },
        labels: {
          style: {
            colors: "#66DA26"
          }
        },
        title: {
          text: "Deaths",
          style: {
            color: "#66DA26"
          }
        }
      },
      {
        seriesName: "Homeless",
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#546E7A"
        },
        labels: {
          style: {
            colors: "#546E7A"
          }
        },
        title: {
          text: "Homeless",
          style: {
            color: "#546E7A"
          }
        }
      },
      {
        seriesName: "Affected",
        opposite: false,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#E91E63"
        },
        labels: {
          style: {
            colors: "#E91E63"
          }
        },
        title: {
          text: "Affected (x 1M)",
          style: {
            color: "#E91E63"
          }
        }
      }
    ],
  };
    constructor() {}
  ngOnInit(): void {

    }
}