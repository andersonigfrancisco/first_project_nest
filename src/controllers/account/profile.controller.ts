import { Controller, Get, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'
import { PrismaService } from 'src/prisma/prisma.services'

@Controller('/profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  async handle(@CurrentUser() user: UserPayload) {
    const user_ = await this.prismaService.user.findUnique({
      where: { id: user.sub },
    })

    if (user_) {
      const data = { ...user_ } as Partial<typeof user_>
      delete data.password
      return {
        user: data,
      }
    }

    return {
      user: null,
    }
  }
}
