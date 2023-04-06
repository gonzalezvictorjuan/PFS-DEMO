import { Injectable, NotFoundException } from "@nestjs/common";
import { Pista } from "src/class/pista";
import * as fs from 'fs';

@Injectable()
export class PistaService {
 
  getPistas(url: string): Pista[] {
    const pistas = [];

    let datos = fs.readFileSync(url, 'utf-8');

    let renglon= datos.split('\r\n');

    for(let linea of renglon) {
     let partes = linea.split(',');

      let pista = new Pista(parseInt(partes[0]), partes[1], parseInt(partes[2]), partes[3], parseInt(partes[4]));

      pistas.push(pista);
    }
      return pistas;
  }

  // getPistaById(id: number): Pista {
  //   const pista = this.Pistas.find((pista) => pista.id === id);

  //   if (!pista) {
  //     // devolver una exception
  //     throw new NotFoundException();
  //   }

  //   return pista;
  // }

  // newPista(
  //   nombre: string,
  //   duracion: number,
  //   interprete: string,
  //   lanzamiento: number,
  // ) {
  //   const id = this.Pistas.length;
  //   const newPista = new Pista(id, nombre, duracion, interprete, lanzamiento);

  //   this.Pistas.push(newPista);
  // }
}
