import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/account/create.account.controller'
import { AuthenticateController } from './controllers/auth/auth.controller'
import { ProfileController } from './controllers/account/profile.controller'
import { PrismaService } from '../prisma/prisma.services'

@Module({
  controllers: [
    CreateAccountController,
    AuthenticateController,
    ProfileController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
