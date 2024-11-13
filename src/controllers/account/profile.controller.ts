import { Controller, Get } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.services'

@Controller('/profile')
export class ProfileController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  async handle() {
    return 'ok'
  }
}
