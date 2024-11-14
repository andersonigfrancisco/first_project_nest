import { User } from '@/domain/users/enterprise/entities/user'
import { UserRepository } from '@/domain/users/application/repositories/user-repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaUsersRepository implements UserRepository {
  public items: User[] = []

  async create(user: User) {
    this.items.push(user)
  }
}
