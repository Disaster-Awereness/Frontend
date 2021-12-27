import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-black">
      <div class="navbar-brand">
        <a class="navbar-item">
        <span style='font-size:20px;'>&#10170;</span>
        &nbsp;Natural Disasters Dashboard 
        </a>
      </div>
    </div>
  `,
  styles: [`
  .navbar {
    /*Keeps navbar fixed and full width */
    position: fixed;
    width: 100%;
  }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
