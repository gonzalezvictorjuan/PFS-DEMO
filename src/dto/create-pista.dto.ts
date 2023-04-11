import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

// DTO >> Data Transfer Object

export class CreatePistaDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly nombre: string;

  @IsNumber()
  readonly duracion: number;

  @IsString()
  @IsNotEmpty()
  readonly interprete: string;

  @IsNumber()
  readonly lanzamiento: number;
}
