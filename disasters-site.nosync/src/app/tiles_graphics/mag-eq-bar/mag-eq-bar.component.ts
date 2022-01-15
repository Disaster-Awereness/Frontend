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
      label: "[1 : No felt]",
      value:	2
    },
    {
      label: "[2 : Weak]",
      value: 0
    },
    {
      label: "[3 : Weak]" ,
      value: 2
    },
    {
      label: "[4 : Light]",
      value: 22
    },
    {
      label: "[5 : Moderate]",
      value: 245
    },
    {
      label: "[6 : Strong]",
      value: 528
    },
    {
      label: "[7 : Very strong]" ,
      value: 461
    },
    {
      label: "[8 : Severe]",
      value: 170
    },
    {
      label: "[9 : Violent]",
      value: 23
    },
    {
      label: "[10 : Extreme]",
      value: 2
    }
    ];

    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "",
        //Set the chart subcaption
        subCaption: "[Period: 1900-2021]",
        //Set the x-axis name
        xAxisName: "Magnitude (Richter scale)",
        //Set the y-axis name
        yAxisName: "Number",
        showValues: "1",
        numberSuffix: "",
        labeldisplay: "rotate",
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
