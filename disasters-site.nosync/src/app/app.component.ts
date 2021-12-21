import { BannerComponent } from './banner/banner.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <!--Header-->
  <app-header></app-header>
  <!--Routes injected here!-->
  <router-outlet></router-outlet>
  <app-banner></app-banner>
  <!--Map section below -->



  <app-introduction></app-introduction>
  <!--Footer-->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'disasters-site';
}
