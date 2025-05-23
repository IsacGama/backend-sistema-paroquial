import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { jwtConstant } from './constants';

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstant.secret,
    signOptions: {expiresIn: '1h'}
  })],
  controllers: [AuthController],
  providers: [AuthService , PrismaService]
})
export class AuthModule {}
