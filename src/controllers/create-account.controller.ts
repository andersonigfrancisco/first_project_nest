import { Body, Controller, Post } from '@nestjs/common'
import { User } from '@prisma/client'

@Controller('/accounts')
export class CreateAccountController {
  constructor() {}

  @Post()
  async handle(@Body() body: User) {
    const { name, email, password } = body

    console.log(body)

    return {
      name,
      email,
      password,
    }
  }
}
