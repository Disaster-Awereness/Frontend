import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-map-fusion',
  template: `
    <p>
      world-map-fusion works!
    </p>
    <div class="card">
      <fusioncharts
        type="world"
        width="100%"
        height="300"
        dataFormat="json"
        [dataSource]="dataSource"
      ></fusioncharts>
    </div>
  `,
  styles: [
  ]
})
export class WorldMapFusionComponent implements OnInit {

  dataSource = {
    "chart": {
      "caption": "Distribution of earthquakes per Continent",
      "subcaption": " 1900-2021",
      "numbersuffix": "%",
      "includevalueinlabels": "1",
      "labelsepchar": ": ",
      "entityFillHoverColor": "#FFF9C4",
      "theme": "fusion"
    },
    "colorrange": {
      "minvalue": "0",
      "code": "#FFE0B2",
      "gradient": "5",
      "color": [

        {
          "minvalue": "0.0",
          "maxvalue": "5.0",
          "color": "#FFE8BE"
        },
        {
          "minvalue": "5.0",
          "maxvalue": "10.0",
          "color": "#FFD74D"
        },
        {
          "minvalue": "10.0",
          "maxvalue": "30.0",
          "color": "#FB8C00"
        },
        {
          "minvalue": "30.0",
          "maxvalue": "60.0",
          "color": "#E65100"
        }
      ]
    },
    "data": [{
        "id": "NA",
        "value": "10.8",
        "showLabel": "1"

      },
      {
        "id": "SA",
        "value": "9.5",
        "showLabel": "1"
      },
      {
        "id": "AS",
        "value": "58.5",
        "showLabel": "1"

      },
      {
        "id": "EU",
        "value": "12.8",
        "showLabel": "1"
      },
      {
        "id": "AF",
        "value": "4.8",
        "showLabel": "1"
      },
      {
        "id": "AU",
        "value": "3.6",
        "showLabel": "1"
      }
    ]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
