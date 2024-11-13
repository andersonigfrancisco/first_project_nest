import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard'
import { PrismaService } from 'src/prisma/prisma.services'

@Controller('/profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  async handle() {
    return 'ok'
  }
}
