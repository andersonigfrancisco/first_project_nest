import { PaginationParams } from '@/cors/repositories/pagination-params'
import { Product } from '../../enterprise/entities/Product'

export interface ProductRepository {
  findById(id: string): Promise<Product | null>
  findMany(params: PaginationParams): Promise<Product[]>
  create(product: Product): Promise<void>
  save(product: Product): Promise<void>
  delete(product: Product): Promise<void>
}
