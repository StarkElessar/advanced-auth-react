import { AnyAction } from 'redux'

import { UserInterface } from "../../models/UserInterface";
import { SET_AUTH, USER_LOGIN, USER_LOGOUT, USER_REGISTRATION } from "../constants";

const initialState: object = {
  user: {} as UserInterface,
  isAuth: false as boolean
}

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      }
    case USER_REGISTRATION:
      return {
        ...state,
        user: action.payload
      }
      case USER_LOGIN:
        return {
          ...state,
          user: action.payload,
          isAuth: true
        }
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuth: false
      }
    default:
      return state
  }
}

export default userReducer