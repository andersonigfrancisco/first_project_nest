export interface CreateProductDTO {
  id?: string
  name: string
  description: string
  price: number
  category: string
  createdAt: Date
  updatedAt?: Date
}

export interface UpdateProductDTO extends CreateProductDTO {
  productId: string
}
