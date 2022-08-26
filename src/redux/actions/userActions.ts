import axios from 'axios'
import { Dispatch } from 'redux'

import AuthService from '../../services/AuthService'
import { AuthResponse } from '../../types/AuthResponse'
import { API_URL } from '../../services/AxiosService'
import { UserAction, UserActionTypes } from '../../types/user'

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS })

    const response = await axios.get(`${API_URL}/users`, {
      withCredentials: true,
    })
    console.log(response)

    dispatch({
      type: UserActionTypes.FETCH_USERS_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: 'Произошла ошибка при загрузке пользователей..',
    })
  }
}

export const userLogin =
  (email: string, password: string) =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.login(email, password)
      console.log(response.data.user)

      localStorage.setItem('token', response.data.accessToken)
      dispatch({
        type: UserActionTypes.USER_LOGIN,
        payload: response.data.user,
      })
    } catch (error: any) {
      console.log(error.response?.data?.message)
    }
  }

export const userRegister =
  (email: string, password: string) =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await AuthService.registration(email, password)
      console.log(response)

      localStorage.setItem('token', response.data.accessToken)
      dispatch({
        type: UserActionTypes.USER_LOGIN,
        payload: response.data.user,
      })
    } catch (error: any) {
      console.log(error.response?.data?.message)
    }
  }

export const userLogout = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    await AuthService.logout()

    localStorage.removeItem('token')
    dispatch({ type: UserActionTypes.USER_LOGOUT })
  } catch (error: any) {
    console.log(error.response?.data?.message)
  }
}

export const checkAuth = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    })

    localStorage.setItem('token', response.data.accessToken)
    dispatch({ type: UserActionTypes.SET_AUTH, payload: response.data.user })
  } catch (error: any) {
    console.log(error.response?.data?.message)
  }
}
