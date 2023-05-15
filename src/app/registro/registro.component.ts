import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre: string = "";
  correo: string = "";
  tel: string = "";
  fecha: string = "";
  habitacion: string = "";
  feedback: string="";
  mensaje: string="";
  registrosCambiados: number = 0;
  registros: any[] = [];
  constructor() { }



  guardarRegistro() {
    const registro = {
      nombre: this.nombre,
      correo: this.correo,
      tel: this.tel,
      fecha: this.fecha,
      habitacion: this.habitacion
    };
    let registros: any[] = JSON.parse(localStorage.getItem('registros') || '[]');
    registros.push(registro);
    localStorage.setItem('registros', JSON.stringify(registros));
    this.registrosCambiados += 1; // Incrementar contador de registros cambiados
  
    this.registros = registros; // Cargar los registros del local storage
  }
}

