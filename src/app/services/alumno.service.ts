import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  listAlumnos: Alumno[] = [
    { nombre: 'Juan Perez', estado: 'Aprobado' },
    { nombre: 'Nicolas Garcia', estado: 'No Aprobado' },
    { nombre: 'Maria funes', estado: 'Promocionado' }
  ];

  constructor() { }

  addAlumno(alumno: Alumno): void {
    this.listAlumnos.unshift(alumno);
  }

  updateAlumno(id: number, estado: string): void {
    this.listAlumnos[id].estado = estado;
  }
}
