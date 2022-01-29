import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--Home-->
  <app-home></app-home>

  <!--Summary-->
  <!-- <app-summary></app-summary> -->

  <!--Banner for introduction-->
  <app-banner>The first person to come up with a scientific explanation of <br>earthquakes
     was Cambridge professor John Michell</app-banner>

  <!--Introduction-->
  <app-introduction></app-introduction>

  <!--Banner for definition-->
  <app-banner>Definition</app-banner>

  <!--Definition-->
  <app-definition></app-definition>

  <!--Banner for history-->
  <app-banner>History</app-banner>

  <!--History-->
  <app-history></app-history>

  <!--Banner for consequences-->
  <app-banner>Earthquake Consequences</app-banner>

  <!--Consequences-->
  <app-consequences></app-consequences>

  <!--Banner for countries-->
  <app-banner>Looking at the country level...</app-banner>

  <!--By country-->
  <app-by-country></app-by-country>

  <!--Banner for top countries-->
  <app-banner>Human Impact</app-banner>

  <!--Top countries-->
  <app-top-countries></app-top-countries>

  <!--Banner for did-you-know-->
  <app-banner>Did you know...?</app-banner>

  <!--Did you know?-->
  <app-did-you-know></app-did-you-know>

  <!--Banner for safety-->
  <app-banner>Safety Advice</app-banner>

  <!--Safety-->
  <app-safety></app-safety>

  <!--Credits-->
  <app-credits></app-credits>
  
  <!--Footer-->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'disasters-site';
}
