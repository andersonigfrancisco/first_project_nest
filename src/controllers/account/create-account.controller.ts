import { ConflictException, Body, Controller, Post } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.services'
import { hash } from 'bcryptjs'
import { z } from 'zod'

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/accounts')
export class CreateAccountController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async handle(@Body() body: CreateAccountBodySchema) {
    const { name, email, password } = body

    const userWithSomeEmail = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSomeEmail) {
      throw new ConflictException('User with same e-mail adress already exist!')
    }

    const hashPassword = await hash(password, 8)

    const data = await this.prismaService.user.create({
      data: { name, email, password: hashPassword },
    })

    console.log(body)

    return data
  }
}
