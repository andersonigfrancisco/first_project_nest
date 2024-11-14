import { User } from '../../../users/enterprise/entities/user'

export interface UserRepository {
  create(user: User): Promise<void>
}
