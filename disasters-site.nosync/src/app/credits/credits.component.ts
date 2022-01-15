import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
  <section class="section is-medium">
      <div class="content">
      <p>
        Credits:
      </p>
  </div>
  </section>
  `,
  styles: [
    `
    .section {
      padding: 80px;
      margins: 0px;
    }
    `
  ]
})
export class CreditsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
