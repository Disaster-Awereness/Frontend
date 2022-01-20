import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar">
      
    </div>
  `,
  styles: [`
  .navbar {
    /*Keeps navbar fixed and full width */
    background-color: transparent;
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
