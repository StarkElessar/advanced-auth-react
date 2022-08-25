import { AnyAction } from "redux"
import { UserInterface } from "../../models/UserInterface"
import AuthService from "../../services/AuthService"
import { SET_AUTH, SET_USER, USER_LOGOUT } from "../constants"
import { AppDispatch } from "../store"

export const fetchUserRegister = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await AuthService.registration(email, password)

    localStorage.setItem('token', response.data.accessToken)
    dispatch(setAuth(true))
    dispatch(setUser(response.data.user))
  } catch (error: any) {
    console.log(error.response?.data?.message)
  }
}

export const fetchUserLogin = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await AuthService.login(email, password)

    localStorage.setItem('token', response.data.accessToken)
    dispatch(setAuth(true))
    dispatch(setUser(response.data.user))
  } catch (error: any) {
    console.log(error.response?.data?.message)
  }
}

export const fetchUserLogout = () => async (dispatch: AppDispatch) => {
  try {
    const response = await AuthService.logout()

    localStorage.removeItem('token')
    dispatch(setAuth(false))
    dispatch(setUser({} as UserInterface))
  } catch (error: any) {
    console.log(error.response?.data?.message)
  }
}

export const setUser = (data: object): AnyAction => ({
  type: SET_USER,
  payload: data
})

export const setAuth = (bool: boolean): AnyAction => ({
  type: SET_AUTH,
  payload: bool
})

export const userLogout = (): AnyAction => ({ type: USER_LOGOUT })