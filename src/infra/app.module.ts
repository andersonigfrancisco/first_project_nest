import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.services'
import { CreateAccountController } from './htpp/controllers/account/create.account.controller'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './htpp/controllers/auth/auth.controller'
import { ProfileController } from './htpp/controllers/account/profile.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    ProfileController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
