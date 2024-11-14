import {
  ConflictException,
  Body,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common'
import { PrismaService } from '@/infra/prisma/prisma.services'
import { hash } from 'bcryptjs'
import { z } from 'zod'
import { ZodValidationPipe } from '@/infra/htpp/pipes/zod-validation-pipe'

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/accounts')
@UsePipes(new ZodValidationPipe(createAccountBodySchema))
export class CreateAccountController {
  constructor(private prismaService: PrismaService) {}

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
