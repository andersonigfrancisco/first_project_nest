import { User } from '@/domain/users/enterprise/entities/user'
import { UserRepository } from '@/domain/users/application/repositories/user-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.services'

@Injectable()
export class PrismaUsersRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: User): Promise<User | null> {
    const usertData = await this.prismaService.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    })
    return usertData ? User.mapToUserEntity(usertData) : null
  }
}
