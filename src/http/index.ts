import axios from "axios"

export const API_URL: string = `https://advanced-auth-back.herokuapp.com/api`

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})




$api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`

  return config
})

export default $api