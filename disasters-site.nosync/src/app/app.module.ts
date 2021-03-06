import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopupService } from './popup.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { BannerComponent } from './banner/banner.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CardsComponent } from './cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryComponent } from './summary/summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeathByContComponent } from './tiles_graphics/death-by-cont/death-by-cont.component';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartComponent } from './tiles_graphics/bar-chart/bar-chart.component';
import { BarChartFusionComponent } from './tiles_graphics/bar-chart-fusion/bar-chart-fusion.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Load FusionModule
import { FusionChartsModule } from 'angular-fusioncharts';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Maps
import * as Maps from 'fusioncharts/fusioncharts.maps';
// Load WorldMap definition
import * as World from 'fusioncharts/maps/fusioncharts.world';
// Load FusionTheme theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { WorldMapFusionComponent } from './tiles_graphics/world-map-fusion/world-map-fusion.component';
import { DisAssocPieComponent } from './tiles_graphics/dis-assoc-pie/dis-assoc-pie.component';
import { DeathContPieComponent } from './tiles_graphics/death-cont-pie/death-cont-pie.component';
import { NormAffectBarComponent } from './tiles_graphics/norm-affect-bar/norm-affect-bar.component';
import { EqPerHourComponent } from './tiles_graphics/eq-per-hour/eq-per-hour.component';
import { TreeEqCountryComponent } from './tiles_graphics/tree-eq-country/tree-eq-country.component';
import { MagEqBarComponent } from './tiles_graphics/mag-eq-bar/mag-eq-bar.component';
import { LineDataFullComponent } from './tiles_graphics/line-data-full/line-data-full.component';
import { HeatAffectedFullComponent } from './tiles_graphics/heat-affected-full/heat-affected-full.component';
import { DefinitionComponent } from './definition/definition.component';
import { ByCountryComponent } from './by-country/by-country.component';
import { ConsequencesComponent } from './consequences/consequences.component';
import { HistoryComponent } from './history/history.component';
import { DidYouKnowComponent } from './did-you-know/did-you-know.component';
import { SafetyComponent } from './safety/safety.component';
import { TopCountriesComponent } from './top-countries/top-countries.component';
import { ChoroplethComponent } from './choropleth/choropleth.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { CreditsComponent } from './credits/credits.component';
import { MultiChartConsComponent } from './tiles_graphics/multi-chart-cons/multi-chart-cons.component';
import { DethbyYearLineComponent } from './tiles_graphics/dethby-year-line/dethby-year-line.component';


// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Fusion, Maps, World, FusionTheme)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MapComponent,
    BannerComponent,
    IntroductionComponent,
    CardsComponent,
    NavbarComponent,
    SummaryComponent,
    DeathByContComponent,
    BarChartComponent,
    BarChartFusionComponent,
    WorldMapFusionComponent,
    DisAssocPieComponent,
    DeathContPieComponent,
    NormAffectBarComponent,
    EqPerHourComponent,
    TreeEqCountryComponent,
    MagEqBarComponent,
    LineDataFullComponent,
    HeatAffectedFullComponent,
    DefinitionComponent,
    ByCountryComponent,
    ConsequencesComponent,
    HistoryComponent,
    DidYouKnowComponent,
    SafetyComponent,
    TopCountriesComponent,
    ChoroplethComponent,
    HamburgerComponent,
    CreditsComponent,
    MultiChartConsComponent,
    DethbyYearLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ChartsModule,
    NgApexchartsModule,
    NgxChartsModule,
    FusionChartsModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MarkerService,
    PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
