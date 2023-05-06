import { Injectable, NotFoundException } from "@nestjs/common";
import { Pista } from "src/class/pista";
import { v4 as uuid } from "uuid";
import * as fs from "fs";
import { CreatePistaDto } from "src/dto/create-pista.dto";

@Injectable()
export class PistaService {
  private Pistas: Pista[] = [];
  private url: string = "./src/pista/pistas.txt";

  constructor() {
    const datos = fs.readFileSync(this.url, "utf-8");

    if (datos.length) {
      const renglon = datos.split("\r\n");

      for (let linea of renglon) {
        let partes = linea.split(",");

        let pista = new Pista(
          partes[0],
          partes[1],
          parseInt(partes[2]),
          partes[3],
          parseInt(partes[4]),
        );

        this.Pistas.push(pista);
      }
    }
  }

  getPistas(): Pista[] {
    return this.Pistas;
  }

  getPistaById(id: string): Pista {
    const pista = this.Pistas.find((pista) => pista.id === id);

    if (!pista) {
      // devolver una exception
      throw new NotFoundException();
    }

    return pista;
  }

  createPista(CreatePistaDto: CreatePistaDto): Pista {
    const newPista: Pista = new Pista(
      uuid(),
      CreatePistaDto.nombre,
      CreatePistaDto.duracion,
      CreatePistaDto.interprete,
      CreatePistaDto.lanzamiento,
    );

    const dataAppend = this.Pistas.length
      ? "\n" + newPista.toString()
      : newPista.toString();

    this.Pistas.push(newPista);

    fs.appendFileSync(this.url, dataAppend);

    return newPista;
  }

  deletePista(id: string): boolean {
    const pos = this.Pistas.findIndex((e) => {
      return e.id == id;
    });

    if (pos != -1) {
      this.Pistas.splice(pos, 1);
      return true;
    }

    return false;
  }

  updatePista(nuevaPista: any, id: string): string{
    
    let index = this.Pistas.findIndex(pista => pista.id == id);

    if (index != -1) {
      let pistaExistente = this.Pistas[index];

      pistaExistente.setNombre(nuevaPista.nombre);
      pistaExistente.setDuracion(nuevaPista.duracion);
      pistaExistente.setInterprete(nuevaPista.interprete);
      pistaExistente.setLanzamiento(nuevaPista.lanzamiento);

      return "ok"
    } else {
      return "404"
    }

  }
  
}

