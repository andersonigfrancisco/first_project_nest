import { User as PirsmaUser } from '@prisma/client'
import { User } from '@/domain/users/enterprise/entities/user'
import { UniqueEntityId } from '@/cors/unique-entity-id'

export class PrismaUserMapper {
  static toDomain(raw: PirsmaUser): User {
    return User.create(
      {
        email: raw.email,
        id: raw.id,
        name: raw.name,
        password: raw.password,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityId(raw.id),
    )
  }
}
