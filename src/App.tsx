import { FC, useEffect } from 'react'

import 'antd/dist/antd.css'
import './App.css'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'
import AppRoute from './components/AppRoute'

const App: FC = () => {
  const { checkAuth } = useActions()
  const { loading } = useTypedSelector(({user}) => user)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth()
    }
  }, [])

  if (loading) {
    return <h1>Идет загрузка..</h1>
  }

  return (
    <div className="wrapper">
      <AppRoute/>
    </div>
  )
}

export default App
