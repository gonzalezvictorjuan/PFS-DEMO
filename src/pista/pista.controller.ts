import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { PistaService } from "./pista.service";
import { Pista } from "src/class/pista";

@Controller("pistas")
export class PistaController {
  constructor(private readonly pistaService: PistaService) {}

  @Get() // url/pistas
  getPistas(): Pista[] {
    return this.pistaService.getPistas('./src/pista/pistas.txt');
  }

//   @Get(":id") // url/pistas/:id >> /pistas/1
//   getPistaById(
//     @Param("id", ParseIntPipe)
//     id: number,
//   ): Pista {
//     return this.pistaService.getPistaById(id);
//   }

//   @Post()
//   postPista(@Body() body: any) {
//     // crear una nueva pista y hacer push

//     console.log(body);

//     const { nombre, duracion, interprete, lanzamiento } = body;

//     this.pistaService.newPista(nombre, duracion, interprete, lanzamiento);

//     return { body };
//   }

//   @Put(":id")
//   putPista() {
//     // Traer la pista y modificarla
//   }

//   @Delete(":id")
//   deletePista() {}
 }
