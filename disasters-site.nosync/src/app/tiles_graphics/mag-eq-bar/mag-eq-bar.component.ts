import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mag-eq-bar',
  template: `
    <p>
      mag-eq-bar works!
    </p>
    <div class="card">
      <fusioncharts
        width="100%"
        height="400"
        type="Column2d"
        [dataSource]="dataSource"
      >
    </fusioncharts>
  `,
  styles: [
  ]
})
export class MagEqBarComponent implements OnInit {

  dataSource: Object;
  constructor() {
    //STEP 2 - Chart Data
  const chartData = [
    {
      label: "[0-1]",
      value:	2
    },
    {
      label: "[1-2]",
      value: 0
    },
    {
      label: "[2-3]" ,
      value: 2
    },
    {
      label: "[3-4]",
      value: 22
    },
    {
      label: "[4-5]",
      value: 245
    },
    {
      label: "[5-6]",
      value: 528
    },
    {
      label: "[6-7]" ,
      value: 461
    },
    {
      label: "[7-8]",
      value: 170
    },
    {
      label: "[8-9]",
      value: 23
    },
    {
      label: "[9-10]",
      value: 2
    }
    ];

    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Magnitude of earthquakes",
        //Set the chart subcaption
        subCaption: "[1900-2021]",
        //Set the x-axis name
        xAxisName: "Magnitude (Richter scale)",
        //Set the y-axis name
        yAxisName: "Number",
        showValues: "1",
        numberSuffix: "",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData
    };
    this.dataSource = dataSource;
  }

  ngOnInit(): void {
  }

}
