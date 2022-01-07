import { BannerComponent } from './banner/banner.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--Header-->
  <app-header></app-header>
 
  <!--Routes injected here!-->
  <router-outlet></router-outlet>

  <!--Summary-->
  <app-summary></app-summary>

  <!--Banner-->
  <app-banner></app-banner>

  <!--Introduction-->
  <app-introduction></app-introduction>

  <!--tiles-->
  <app-tiles></app-tiles>

  <!--Cards-->
  <app-cards></app-cards>

  <!--Footer-->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'disasters-site';
}
