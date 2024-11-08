import { Module } from '@nestjs/common'

import { PrismaService } from './prisma/prisma.services'
import { CreateAccountController } from './controllers/account/create-account.controller'

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
