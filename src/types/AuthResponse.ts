import { UserInterface } from './user'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserInterface
}
