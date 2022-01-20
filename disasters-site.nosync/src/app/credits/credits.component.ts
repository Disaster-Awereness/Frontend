import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  template: `
  <section class="section is-medium" id="credits">
      <h2>Credits</h2>
      <br>
      <h4>Literature</h4>
      <ul style="list-style-type:none;">
        <li>[1] Earthquakes in human history - Jelle Zeilinga de Boer and Donald Theodore Sanders, Princeton University Press, 2004.</li>
        <li>[2].....</li>
        <li>[3].....</li>
        <li>[4].....</li>
      </ul>
      <br>
      <h4>Images</h4>
      <ul style="list-style-type:none;">
        <li>[I] .....</li>
        <li>[II].....</li>
        <li>[III].....</li>
        <li>[IV].....</li>
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
