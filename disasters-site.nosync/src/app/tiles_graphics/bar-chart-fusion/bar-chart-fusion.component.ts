import { Component, OnInit } from '@angular/core';
import { single } from './data';

// Solution to ngx-charts-number-card identification problems
//https://stackoverflow.com/questions/39428132/custom-elements-schema-added-to-ngmodule-schemas-still-showing-error

@Component({
  selector: 'app-bar-chart-fusion',
  template: `
    <p>
      bar-chart-fusion works!
    </p>
    <div #ContainerRef class="card">
      <div  class="card-body">
        <ngx-charts-number-card
          [view]="view"
          [results]="single"
          [cardColor]="cardColor"
          (select)="onSelect($event)"
          scheme = "cool">
        </ngx-charts-number-card>
      </div>
    </div>
  `,
  styles: [
    `.card-body {
      border-radius: 20px;
      background-color: orange;

    }`
  ]
})
export class BarChartFusionComponent implements OnInit {

  single = [];
  view: any = [171,600];

  cardColor: string = '#255688';
  
  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
