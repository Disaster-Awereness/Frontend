import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
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
      center: [50, 20],
      zoom: 5
    });

    //Set tile options for basemap.
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVuYnVjaGVuYXUiLCJhIjoiY2tvdHRoZDJ0MGVybTJybGxtcHQwMXViZSJ9.JaW_435Cnt_dk1WXzFzajg', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 12,
      minZoom: 3,
      id: 'mapbox/light-v10',
      accessToken: 'pk.eyJ1IjoiYmVuYnVjaGVuYXUiLCJhIjoiY2tvdHRoZDJ0MGVybTJybGxtcHQwMXViZSJ9.JaW_435Cnt_dk1WXzFzajg'
    });

    tiles.addTo(this.map);
  }

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeEarthquakeMarkers(this.map);
  }



}
