import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habitacion } from '.vscode/habitaciones';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  private habitaciones: Habitacion[] = [
    { id: 1, nombre: 'Habitación individual', tipo: 'Individual', precio: 500, descripcion: 'Habitación para una persona', imagen: 'https://bufondearenillashotel.es/wp-content/uploads/2015/02/habitacion-individual.jpg' },
    { id: 2, nombre: 'Habitación doble', tipo: 'Doble', precio: 800, descripcion: 'Habitación para dos personas', imagen: 'https://hotelmalinallihuamantla.com/wp-content/uploads/2019/12/habitacion-doble-malinalli-1.jpg' },
    { id: 3, nombre: 'Habitación triple', tipo: 'Triple', precio: 1100, descripcion: 'Habitación para tres personas', imagen: 'https://hotelflamingoinn.com.mx/wp-content/uploads/2021/05/habitacion-ejecuiva-triple.jpg' },
    { id: 4, nombre: 'Suite', tipo: 'Suite', precio: 1500, descripcion: 'Habitación de lujo para dos personas', imagen: 'https://s3.us-east-1.amazonaws.com/comercial-production-gx-cms-content-bucket/hxm/rooms/suites/ocean-front-family/ocean-front-fam-005.jpg' },
    { id: 5, nombre: 'Habitación familiar', tipo: 'Familiar', precio: 1200, descripcion: 'Habitación para cuatro personas', imagen: 'https://as01.epimg.net/diarioas/imagenes/2022/05/06/actualidad/1651826263_229801_1651826454_noticia_normal_recorte1.jpg' }
  ];

  constructor() { }

  getHabitaciones(): Observable<Habitacion[]> {
    return of(this.habitaciones);
  }
}
