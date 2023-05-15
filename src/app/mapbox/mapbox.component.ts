import { Component, OnInit } from '@angular/core';
import { environment } from '../../config';
import mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent  {
  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.935242, 40.730610],
      zoom: 9
    });
  }

}
