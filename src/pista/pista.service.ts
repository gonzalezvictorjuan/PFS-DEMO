import { Injectable, NotFoundException } from "@nestjs/common";
import { Pista } from "src/class/pista";
import { AppService } from "../app.service";

@Injectable()
export class PistaService {
  private Pistas: Pista[] = [];

  constructor(private readonly appService: AppService) {
    for (let i = 0; i < 20; i++) {
      const pista = new Pista(
        i,
        "N" + this.appService.getRandomString(),
        360,
        "I" + this.appService.getRandomString(),
        1990 + i,
      );

      this.Pistas.push(pista);
    }
  }

  getPistas(): Pista[] {
    return this.Pistas;
  }

  getPistaById(id: number): Pista {
    const pista = this.Pistas.find((pista) => pista.id === id);

    if (!pista) {
      // devolver una exception
      throw new NotFoundException();
    }

    return pista;
  }

  newPista(
    nombre: string,
    duracion: number,
    interprete: string,
    lanzamiento: number,
  ) {
    const id = this.Pistas.length;
    const newPista = new Pista(id, nombre, duracion, interprete, lanzamiento);

    this.Pistas.push(newPista);
  }
}
