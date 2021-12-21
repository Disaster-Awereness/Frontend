import { BannerComponent } from './banner/banner.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <app-navbar></app-navbar>

  <!--Header-->
  <app-header></app-header>

  <!--Routes injected here!-->
  <router-outlet></router-outlet>

  <app-about></app-about>

  <app-banner></app-banner>

  <app-introduction></app-introduction>

  <!--Map section below -->
  <app-map></app-map>

  <app-cards></app-cards>



  <!--Footer-->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'disasters-site';
}
