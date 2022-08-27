import { $api } from './AxiosService'
import { AxiosResponse } from 'axios'
import { UserInterface } from '../types/user'

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<UserInterface[]>> {
    return $api.get<UserInterface[]>('/users')
  }
}
