import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--Home-->
  <app-home></app-home>

  <!--Summary-->
  <app-summary></app-summary>

  <!--Banner for introduction-->
  <app-banner>First person to come up with scientifict explanation of earthquakes
     was Cambridge professor John Michell</app-banner>

  <!--Introduction-->
  <app-introduction></app-introduction>

  <!--Banner for definition-->
  <app-banner>Some interesting facts about definition of earthquakes</app-banner>

  <!--Definition-->
  <app-definition></app-definition>

  <!--Banner for countries-->
  <app-banner>Some interesting facts about countries with most earthquakes</app-banner>

  <!--By country-->
  <app-by-country></app-by-country>

  <!--Banner for consequences-->
  <app-banner>Some interesting facts about earthquake consequences</app-banner>

  <!--Consequences-->
  <app-consequences></app-consequences>

  <!--Banner for history-->
  <app-banner>Some interesting facts about earthquake history</app-banner>

  <!--History-->
  <app-history></app-history>

  <!--Banner for did-you-know-->
  <app-banner>Did you know...?</app-banner>

  <!--Did you know?-->
  <app-did-you-know></app-did-you-know>

  <!--Banner for top countries-->
  <app-banner>Top countries</app-banner>

  <!--Top countries-->
  <app-top-countries></app-top-countries>

  <!--Banner for safety-->
  <app-banner>Safety
    <p class="subtitle">

      To stay safe before, during & after an earthquake, review the following tips
    </p>

  </app-banner>

  <!--Safety-->
  <app-safety></app-safety>
  
  <!--Footer-->
  <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'disasters-site';
}
