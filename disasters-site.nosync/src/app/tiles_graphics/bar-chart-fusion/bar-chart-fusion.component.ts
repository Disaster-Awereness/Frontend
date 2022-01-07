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
    <div class="card">
      <div #ContainerRef class="card-body">
        <ngx-charts-number-card
          [view]="view"
          [results]="single"
          [cardColor]="cardColor"
          (select)="onSelect($event)"
          scheme = "cool"
          (window:resize)="
            resizeChart(ContainerRef.offsetWidth,
              ContainerRef.offsetHeight)
          "
          >
        </ngx-charts-number-card>
      </div>
    </div>
  `,
  styles: [
    `.card-body {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      border-radius: 10px;
      color: #ffffff;
      width: 200px;
      height: 500px;
      margin: auto;
    }`
  ]
})
export class BarChartFusionComponent implements OnInit {

  single = [];
  view: any;

  cardColor: string = '#232837';
  
  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

  /* ---- Auto resize chart ---- */
  public resizeChart(width: number, height: number): void {
  this.view = [width, height]
  }

}
