import { usuarios } from './../../generated/prisma/index.d';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDTO, SignInDTO } from './dtos/auth';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService, private jwtService: JwtService) {}

    async signup(data: SignUpDTO) {
        const userAlreadyExistsByEmail = await this.prismaService.usuarios.findUnique({
        where: { email: data.email },
        });

        if (userAlreadyExistsByEmail) {
        throw new UnauthorizedException("Usuário com este email já existe.");
        }

        if (data.cpf) {
        const userAlreadyExistsByCPF = await this.prismaService.usuarios.findUnique({
            where: { cpf: data.cpf },
        });

        if (userAlreadyExistsByCPF) {
            throw new UnauthorizedException("Usuário com este CPF já existe.");
        }
        }

        const hashedPassword = await bcrypt.hash(data.senha, 10);

        const user = await this.prismaService.usuarios.create({
        data: {
            nome: data.nome,
            cpf: data.cpf,
            email: data.email,
            data_nascimento: data.data_nascimento ? new Date(data.data_nascimento) : undefined,
            endereco: data.endereco,
            telefone: data.telefone,
            comunidade: data.comunidade,
            eh_dizimista: data.eh_dizimista,
            eh_funcionario: data.eh_funcionario,
            pastoral: data.pastoral,
            senha: hashedPassword,
        },
        });

        return {
        message: 'Cadastro realizado com sucesso.',
        user: {
            id: user.id,
            nome: user.nome,
            email: user.email,
        },
        };
    }

    async signin(data: SignInDTO) {
        const user = await this.prismaService.usuarios.findUnique({
            where: {
                email: data.email,
            },
        });

        if (!user) {
            throw new UnauthorizedException ('Invalid credentials');
        }

        const passworMatch = await bcrypt.compare(data.senha, user.senha);

        if (!passworMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const accessToken = await this.jwtService.signAsync({
            id: user.id,
            name: user.nome,
            email: user.email
        })
        
        return {
            access_token: accessToken,
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email,
            },
        };
    }
}