import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.services'
import { PrismaUsersRepository } from './repositories/prisma-user-repository'
import { PrismaProductRepository } from './repositories/prisma-product-respository'

@Module({
  providers: [PrismaService, PrismaUsersRepository, PrismaProductRepository],
  exports: [PrismaService, PrismaUsersRepository, PrismaProductRepository],
})
export class DatabaseModule {}
