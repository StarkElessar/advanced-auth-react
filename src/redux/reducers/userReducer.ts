import { UserInterface } from '../../types/user'
import { UserAction, UserActionTypes, UserState } from '../../types/user'

const initialState: UserState = {
  userData: {} as UserInterface,
  allUsers: [],
  statusLogin: null,
  statusRegister: null,
  loading: false,
  isAuth: false,
  error: null,
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null, allUsers: [] }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, allUsers: action.payload }
    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, allUsers: [] }
    case UserActionTypes.SET_AUTH:
      return { ...state, isAuth: true, userData: action.payload }
    case UserActionTypes.USER_REGISTRATION:
      return { ...state, userData: {} as UserInterface, statusRegister: 'loading', isAuth: false, error: null }
    case UserActionTypes.USER_REGISTRATION_SUCCESS:
      return { ...state, userData: action.payload, statusRegister: 'success', isAuth: true, error: null }
    case UserActionTypes.USER_REGISTRATION_ERROR:
      return { ...state, userData: {} as UserInterface, statusRegister: 'error', isAuth: false, error: action.payload }
    case UserActionTypes.USER_LOGIN:
      return { ...state, userData: {} as UserInterface, statusLogin: 'loading', isAuth: false, error: null }
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, userData: action.payload, statusLogin: 'success', isAuth: true, error: null }
    case UserActionTypes.USER_LOGIN_ERROR:
      return { ...state, userData: {} as UserInterface, statusLogin: 'error', isAuth: false, error: action.payload }
    case UserActionTypes.USER_LOGOUT:
      return {
        ...state,
        userData: {} as UserInterface,
        allUsers: [],
        isAuth: false,
        statusLogin: null,
        statusRegister: null,
        error: null
      }
    default:
      return state
  }
}

export default userReducer
