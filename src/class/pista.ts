export class Pista {
  id: number; // Valor unico, no voy a tener dos pistas con el mismo ID
  nombre: string;
  duracion: number;
  interprete: string;
  lanzamiento: number;

  constructor(
    id: number,
    nombre: string,
    duracion: number,
    interprete: string,
    lanzamiento: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.duracion = duracion;
    this.interprete = interprete;
    this.lanzamiento = lanzamiento;
  }
}
