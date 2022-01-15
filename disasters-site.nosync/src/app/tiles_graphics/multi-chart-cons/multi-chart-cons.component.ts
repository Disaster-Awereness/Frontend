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

import { YearData, Injuries, Deaths, Homeless, Affected } from './data';

@Component({
  selector: 'app-multi-chart-cons',
  template: `
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
<apx-chart
  [series]="chart2options.series"
  [chart]="chart2options.chart"
  [colors]="chart2options.colors"
  [yaxis]="chart2options.yaxis"
  [dataLabels]="chart2options.dataLabels"
  [markers]="chart2options.markers"
  [stroke]="chart2options.stroke"
  [xaxis]="chart2options.xaxis"
  [tooltip]="chart2options.tooltip"
></apx-chart>
<apx-chart
  [series]="chart3options.series"
  [chart]="chart3options.chart"
  [colors]="chart3options.colors"
  [yaxis]="chart3options.yaxis"
  [dataLabels]="chart3options.dataLabels"
  [markers]="chart3options.markers"
  [stroke]="chart3options.stroke"
  [xaxis]="chart3options.xaxis"
  [tooltip]="chart3options.tooltip"
></apx-chart>
  `,
  styles: [
    `ul {
      text-align: center;
    }`
  ]
})
export class MultiChartConsComponent {
  public chart1options!: ChartOptions;
  public chart2options!: ChartOptions;
  public chart3options!: ChartOptions;

  constructor() {
    this.initCharts();
  }

 
  public initCharts(): void {
    this.chart1options = {
      series: [
        {
          name: "Injuries",
          data: Injuries
        }
      ],
      chart: {
        id: "Injuries",
        group: "social",
        type: "area",
        height: 200
      },
      colors: ["#900C3F"],
      yaxis: {
        tickAmount: 5  ,
        labels: {
          minWidth: 40
        },
        title: {
          text: "Injuries"
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
        text: "Earthquake's Affectations (1900 - 2021)",
        align: "center",
        offsetX: 0
      },
    };

    
    this.chart2options = {
      series: [
        {
            name: "Homeless",
            data: Homeless
        }
      ],
      chart: {
        id: "Homeless",
        group: "social",
        type: "area",
        height: 200
      },
      colors: ["#546E7A"],
      yaxis: {
        tickAmount: 5,
        labels: {
          minWidth: 40
        },
      title: {
        text: "Homeless"
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
          selection: false
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
        text: "Earthquake's Affectations (1992 - 2021)",
        align: "left",
        offsetX: 90
      },
    };

    this.chart3options = {
      series: [
        {
          name: "Affected",
          data: Affected
        },
      ],
      chart: {
        id: "Affected",
        group: "social",
        type: "area",
        height: 200
      },
      colors: ["#04006D"],
      yaxis: {
        tickAmount: 5,
        labels: {
          minWidth: 40
        },
      title: {
        text: "Affected"
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
          selection: false
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
        text: "Earthquake's Affectations (1992 - 2021)",
        align: "left",
        offsetX: 0
      },
    };
  }

}