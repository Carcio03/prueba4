import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardarRegistro(registro: any): void {
    let registros: any[] = JSON.parse(localStorage.getItem('registros') || '[]');
    registros.push(registro);
    localStorage.setItem('registros', JSON.stringify(registros));
  }

  obtenerRegistros(): any[] {
    return JSON.parse(localStorage.getItem('registros') || '[]');
  }
}