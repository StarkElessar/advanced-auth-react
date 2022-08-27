import { $api, $apiRefresh } from './AxiosService'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '../types/AuthResponse'

export default class AuthService {
  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', { email, password })
  }

  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password })
  }

  static async refresh(): Promise<AxiosResponse<AuthResponse>> {
    return $apiRefresh.get<AuthResponse>(`/refresh`)
  }

  static async logout(): Promise<void> {
    return $api.post('/logout')
  }
}
