import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from "@nestjs/common";
import { PistaService } from "./pista.service";
import { Pista } from "src/class/pista";
import { CreatePistaDto } from "src/dto/create-pista.dto";

@Controller("pistas")
export class PistaController {
  constructor(private readonly pistaService: PistaService) { }

  @Get() // url/pistas
  getPistas(): Pista[] {
    return this.pistaService.getPistas();
  }

  @Get(":id") // url/pistas/:id >> /pistas/a354c326-fc53-4079-9568-9de965eecb7a
  getPistaById(
    @Param("id", ParseUUIDPipe)
    id: string,
  ): Pista {
    return this.pistaService.getPistaById(id);
  }

  @Post()
  postPista(@Body() createPistaDto: CreatePistaDto) {
    return this.pistaService.createPista(createPistaDto);
  }

  @Put(":id")
  putPista(@Body()pista: CreatePistaDto, @Param('id') id: string) : string {
     return this.pistaService.updatePista(pista, id);
  }

  @Delete(":id")
  deletePista(@Param("id") id: string): boolean {
    return this.pistaService.deletePista(id);
  }
}
