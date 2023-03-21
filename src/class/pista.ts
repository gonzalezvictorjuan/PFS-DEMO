export class Pista {
  id: number;
  nombre: string;
  duracion: number;
  interprete: string;

  constructor(
    id: number,
    nombre: string,
    duracion: number,
    interprete: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.duracion = duracion;
    this.interprete = interprete;
  }
}
