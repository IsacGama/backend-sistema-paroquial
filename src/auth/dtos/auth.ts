import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
  IsDateString,
  Length,
} from "class-validator";
import { IsCPF } from "class-validator-cpf";

export class SignUpDTO {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsOptional()
  @IsCPF({ message: "CPF inválido" })
  cpf?: string;

  @IsOptional()
  @IsDateString({}, { message: "Data de nascimento inválida. Use o formato YYYY-MM-DD." })
  data_nascimento?: string;

  @IsOptional()
  @IsString()
  endereco?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 100, { message: "A senha deve ter pelo menos 8 caracteres." })
  senha: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsString()
  comunidade?: string;

  @IsOptional()
  @IsBoolean()
  eh_dizimista?: boolean;

  @IsOptional()
  @IsBoolean()
  eh_funcionario?: boolean;

  @IsOptional()
  @IsString()
  pastoral?: string;
}


export class SignInDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    senha: string;
}