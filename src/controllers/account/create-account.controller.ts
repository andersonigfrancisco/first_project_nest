import { ConflictException, Body, Controller, Post } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.services'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async handle(@Body() body: User) {
    const { name, email, password } = body

    const userWithSomeEmail = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithSomeEmail) {
      throw new ConflictException('User with same e-mail adress already exist!')
    }

    const data = await this.prismaService.user.create({
      data: { name, email, password },
    })

    console.log(body)

    return data
  }
}
