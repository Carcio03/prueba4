import { Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../config';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reservaciones';
  comments: string[] = [];
  onNewCommentAdded(comment: string) {
    console.log('Nuevo comentario agregado:', comment);
  }
  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
  }
  isActive = false;

  changeBackgroundColor() {
    this.isActive = !this.isActive;
  }
}
