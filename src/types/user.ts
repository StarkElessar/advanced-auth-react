import { UserInterface } from "../models/UserInterface"

export interface UserState {
  userData: UserInterface
  allUsers: any[]
  loading: boolean
  isAuth: boolean
  error: null | string
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  USER_REGISTRATION = 'USER_REGISTRATION',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER'
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

interface SetAuthAction {
  type: UserActionTypes.SET_AUTH
  payload: UserInterface
}

interface UserRegistrationAction {
  type: UserActionTypes.USER_REGISTRATION
  payload: UserInterface
}

interface UserLoginAction {
  type: UserActionTypes.USER_LOGIN
  payload: UserInterface
}

interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT
}

export type UserAction = FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | SetAuthAction
  | UserRegistrationAction
  | UserLoginAction
  | UserLogoutAction