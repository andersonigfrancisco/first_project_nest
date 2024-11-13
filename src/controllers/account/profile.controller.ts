import { Controller, Get, UseGuards } from '@nestjs/common'
import { CurrentUser } from '@/auth/current-user-decorator'
import { JwtAuthGuard } from '@/auth/jwt.auth.guard'
import { UserPayload } from '@/auth/jwt.strategy'
import { PrismaService } from '@/prisma/prisma.services'

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
