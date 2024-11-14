import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.services'
import { PrismaUsersRepository } from './repositories/prisma-user-repository'

@Module({
  providers: [PrismaService, PrismaUsersRepository],
  exports: [PrismaService, PrismaUsersRepository],
})
export class DatabaseModule {}
