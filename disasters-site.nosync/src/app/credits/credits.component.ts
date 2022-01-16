import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
  <section class="section is-medium" id="credits">
      <h1>Credits</h1>
      <ul style="list-style-type:none;">
        <li>[1] Earthquakes in human history - Jelle Zeilinga de Boer and Donald Theodore Sanders, Princeton University Press, 2004.</li>
        <li>[2].....</li>
        <li>[3].....</li>
        <li>[4].....</li>
      </ul>
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
