import LoginConfirmForm from '../components/LoginConfirmForm'
import LoginForm from '../components/LoginForm'
import Main from '../components/Main'
import Profile from '../components/Profile'
import RegisterForm from '../components/RegisterForm'

import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_CONFIRM_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts'


export const authRoutes = [
  {id: 1, path: ADMIN_ROUTE, Component: Profile },
  {id: 2, path: LOGIN_CONFIRM_ROUTE, Component: LoginConfirmForm },
]

export const publickRoutes = [
  {id: 1, path: HOME_ROUTE, Component: Main },
  {id: 2, path: LOGIN_ROUTE, Component: LoginForm },
  {id: 3, path: REGISTER_ROUTE, Component: RegisterForm },
]