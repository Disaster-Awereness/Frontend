import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <!--Header-->
  <app-header></app-header>
  
  <!--Routes injected here!-->
  <router-outlet></router-outlet>
  <app-about></app-about>
  <!--Map section below -->
  <app-map></app-map>

  <!--Footer-->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'disasters-site';
}
