import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import * as $ from 'jquery/dist/jquery.min.js';
import { MarkerService } from '../marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {

  //Initialize map variable.
  private map!: L.Map;

  //Function to generate map.
  private initMap(): void {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 0
    });

    //Set tile options for basemap.
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVuYnVjaGVuYXUiLCJhIjoiY2tvdHRoZDJ0MGVybTJybGxtcHQwMXViZSJ9.JaW_435Cnt_dk1WXzFzajg', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 9,
      minZoom: 2,
      id: 'mapbox/light-v10',
      accessToken: 'pk.eyJ1IjoiYmVuYnVjaGVuYXUiLCJhIjoiY2tvdHRoZDJ0MGVybTJybGxtcHQwMXViZSJ9.JaW_435Cnt_dk1WXzFzajg'
    });

    tiles.addTo(this.map);

    //Load plate tectonics GeoJSON from Github.
    $.getJSON("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json", (response) => {
      console.log("response", response);
      var tectonicPlates = new L.GeoJSON(response);
      tectonicPlates.setStyle({
        color: '#93b6c9',
        opacity: .8
      });
      tectonicPlates.addTo(this.map) 
    });   

    //Add legend...
    const legend = new L.Control({position: 'bottomleft'});
    legend.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
      grades= [0, 100],
      labels = [0, 100];
      div.innerHTML += '<div>LEGEND</div>'
      return div;
    }

    legend.addTo(this.map);
  }

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeEarthquakeMarkers(this.map);
  }



}
