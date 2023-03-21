/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";
import { Pista } from "src/class/pista";

@Controller("pistas")
export class PistasController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPistas(): any {
    const Pistas = [];

    for (let i = 0; i < 20; i++) {
      const pista = new Pista(
        i,
        "N" + this.appService.getRandomString(),
        360,
        "I" + this.appService.getRandomString(),
      );

      Pistas.push(pista);
    }
    const data = {
      cant: Pistas.length,
      pistas: Pistas,
    };

    return data;
  }

  @Get() // Ayuda: van a tener que colocar algo en los @Get del archivo
  getJsonMock(): any {
    return "retornar el archivo ../???/pistas.json"; // El archivo lo pueden quitar de la carpeta cliente si lo ven necesario
  }
}
