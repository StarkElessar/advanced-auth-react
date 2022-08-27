import React from 'react'
import { Link } from 'react-router-dom'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts'

const Main: React.FC = () => {
  const { isAuth } = useTypedSelector(({ user }) => user)

  return (
    <div>
      {isAuth ? (
        <h1>
          Привет! Ты авторизован, перейти в кабинет, нажми
          <Link to={ADMIN_ROUTE}> тут</Link>
        </h1>
      ) : (
        <h1>
          Привет! Ты не авторизован, чтобы авторизоваться нажми
          <Link to={LOGIN_ROUTE}> тут</Link>
        </h1>
      )}
    </div>
  )
}

export default Main
