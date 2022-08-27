import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { useTypedSelector } from '../hooks/useTypedSelector'
import { authRoutes, publickRoutes } from '../routes'
import Main from './Main'

const AppRoute: React.FC = () => {
  const { isAuth } = useTypedSelector(({ user }) => user)
  
  return (
    <div>
      <Routes>
        {isAuth && authRoutes.map(({ id, path, Component }) => {
          return <Route path={path} element={<Component />} key={id} />
        })}
        {publickRoutes.map(({ id, path, Component }) => {
          return <Route path={path} element={<Component />} key={id} />
        })}
        <Route path='*' element={<Main />} />
      </Routes>
    </div>
  )
}

export default AppRoute