import axios from 'axios'
import AuthService from './AuthService'

export const HEROKU: string = `https://advanced-auth-back.herokuapp.com/api`
export const LOCAL: string = `http://localhost:5000/api`
export const API_URL = HEROKU

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

export const $apiRefresh = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

$api.interceptors.response.use((config) => {
    return config
  }, async (error) => {
    const originalRequest = error.config

    if (error.response.status === 403 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true

      try {
        const response = await AuthService.refresh()
        localStorage.setItem('token', response.data.accessToken)

        return $api.request(originalRequest)
      } catch (error) {
        console.log('Пользователь не авторизован')
      }
    }
  
    throw error
  }
)
