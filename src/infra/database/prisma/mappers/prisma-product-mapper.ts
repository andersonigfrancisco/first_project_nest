import { Product as PirsmaProduct } from '@prisma/client'
import { Product } from '@/domain/product/enterprise/entities/Product'
import { UniqueEntityId } from '@/cors/unique-entity-id'

export class PrismaProductMapper {
  static toDomain(raw: PirsmaProduct): Product {
    return Product.create(
      {
        id: new UniqueEntityId(raw.id),
        category: raw.category,
        description: raw.description,
        name: raw.name,
        price: raw.price,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityId(raw.id),
    )
  }
}
