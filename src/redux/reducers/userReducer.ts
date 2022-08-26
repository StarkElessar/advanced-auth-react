import { UserInterface } from "../../models/UserInterface"
import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
  userData: {} as UserInterface,
  allUsers: [],
  loading: false,
  isAuth: false,
  error: null
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null, allUsers: [] }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, allUsers: action.payload }
    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, allUsers: [] }
    case UserActionTypes.SET_AUTH:
      return { ...state, isAuth: true, userData: action.payload }
    case UserActionTypes.USER_REGISTRATION:
      return { ...state, userData: action.payload }
    case UserActionTypes.USER_LOGIN:
      return { ...state, userData: action.payload, isAuth: true }
    case UserActionTypes.USER_LOGOUT:
      return { ...state, userData: {} as UserInterface, isAuth: false }
    default:
      return state
  }
}

export default userReducer