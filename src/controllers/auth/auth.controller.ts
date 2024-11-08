import { Controller, Post } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Controller('/session')
export class AuthenticateController {
  constructor(private readonly jwt: JwtService) {}

  @Post()
  async handle() {
    const token = this.jwt.sign({ sub: 'anderson' })
    return token
  }
}
