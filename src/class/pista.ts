export class Pista {
  id: string; // Valor unico, no voy a tener dos pistas con el mismo ID
  nombre: string;
  duracion: number;
  interprete: string;
  lanzamiento: number;

  constructor(
    id: string,
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

  toString(): string {
    return `${this.id},${this.nombre},${this.duracion},${this.interprete},${this.lanzamiento}`;
  }
}
