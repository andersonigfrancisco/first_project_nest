import { ProductRepository } from '@/domain/product/application/repositories/product-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.services'
import { PaginationParams } from '@/cors/repositories/pagination-params'
import { Product } from '@/domain/product/enterprise/entities/Product'

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(id: string): Promise<Product | null> {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    })

    if (!product) {
      return null
    }
    return Product.mapToProductEntity(product)
  }

  async create(data: Product) {
    await this.prismaService.product.create({
      data: {
        id: data.id.toString(),
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      },
    })
  }

  async findMany({ page, limit }: PaginationParams): Promise<Product[]> {
    const products = await this.prismaService.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
    })
    return products.map((productData) =>
      Product.mapToProductEntity(productData),
    )
  }

  async save(data: Product): Promise<void> {
    await this.prismaService.product.update({
      where: { id: data.id.toString() },
      data: {
        name: data.name,
        category: data.category,
        description: data.description,
        price: data.price,
        updatedAt: data.updatedAt,
      },
    })
  }

  async delete(product: Product): Promise<void> {
    await this.prismaService.product.delete({
      where: {
        id: product.id.toString(),
      },
    })
  }
}