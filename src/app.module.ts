import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.services'
import { CreateAccountController } from './controllers/account/create-account.controller'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './controllers/auth/auth.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [CreateAccountController, AuthenticateController],
  providers: [PrismaService],
})
export class AppModule {}
