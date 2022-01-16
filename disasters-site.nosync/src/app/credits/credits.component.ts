import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
  <section class="section is-medium">
      <div class="content">
      <p>
        Credits:
        <li>[1].....</li>
        <li>[2].....</li>
        <li>[3].....</li>
        <li>[4].....</li>
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
