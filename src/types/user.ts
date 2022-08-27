export interface UserInterface {
  email: string
  id: string
  isActivated: boolean
}

export interface UserState {
  userData: UserInterface
  allUsers: any[]
  statusLogin: null | 'loading' | 'success' | 'error'
  loading: boolean
  isAuth: boolean
  error: null | string
}

export enum UserActionTypes {
  SET_LOADING = 'SET_LOADING',
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  USER_REGISTRATION = 'USER_REGISTRATION',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGIN_SUCCESS= 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
  USER_LOGOUT = 'USER_LOGOUT',
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
}

interface SetLoadingAction {
  type: UserActionTypes.SET_LOADING
  payload: boolean
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
}
interface UserLoginSuccessAction {
  type: UserActionTypes.USER_LOGIN_SUCCESS
  payload: UserInterface
}
interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR
  payload: string
}
interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT
}

export type UserAction =
  | SetLoadingAction
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | SetAuthAction
  | UserRegistrationAction
  | UserLoginAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | UserLogoutAction
