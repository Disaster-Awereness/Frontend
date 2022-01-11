import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
// @ts-ignore
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
    $.getJSON("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json", (response:any) => {
      console.log("response", response);
      var tectonicPlates = new L.GeoJSON(response);
      tectonicPlates.setStyle({
        color: '#93b6c9',
        opacity: .8
      });
      tectonicPlates.addTo(this.map) 
    });  
  }

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeEarthquakeMarkers(this.map);

    function getColor(d:any) {
      return d > 9 ? '#93b6c9' :
          d > 8  ? '#800026' :
           d > 7  ? '#BD0026' :
           d > 6  ? '#E31A1C' :
           d > 5  ? '#FC4E2A' :
           d > 4  ? '#FD8D3C' :
           d > 3   ? '#FEB24C' :
           d > 2   ? '#FED976' :
                '#737373';
    }

    var legend = new L.Control({position: 'bottomleft'});

    legend.onAdd = function (mymap:any) {

    var div = L.DomUtil.create('div', 'info legend'),
    grades = [2, 3, 4, 5, 6, 7, 8, 9, 10],
    labels = ['unknown', '3 or lower', '4', '5', '6', '7', '8', 'higher than 8', 'tectonic plate boundaries'];

    // loop through our intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<span style="height:0.8em; width:0.8em; background-color:' + getColor(grades[i]) + '; border-radius:50%; display: inline-block"></span>' 
        + '&emsp;' + labels[i] + '<br>';
    }
    return div;
    };

    legend.addTo(this.map);
    }



}
function getColor(arg0: number) {
  throw new Error('Function not implemented.');
}

