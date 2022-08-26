import { FC, useEffect } from 'react'

import './App.css'
import LoginForm from './components/LoginForm'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'

const App: FC = () => {
  const { checkAuth, userLogout } = useActions()
  const { isAuth, userData } = useTypedSelector((state) => state.user)

  console.log(isAuth, userData)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth()
    }
  }, [])

  if (!isAuth) {
    return <LoginForm />
  }

  return (
    <div className="wrapper">
      <h1>
        {isAuth
          ? `Пользователь ${userData.email} авторизован..`
          : 'Авторизуйтесь'}
      </h1>
      <button onClick={() => userLogout()}>Выйти</button>
    </div>
  )
}

export default App
