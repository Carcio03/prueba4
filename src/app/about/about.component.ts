import { Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
  }
}
