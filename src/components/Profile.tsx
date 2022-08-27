import { FC, useEffect } from 'react'
import { Button } from 'antd'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'

const Profile: FC = () => {
  const navigate = useNavigate()
  const { userLogout, fetchUsers } = useActions()
  const { loading, isAuth, userData, allUsers, error } = useTypedSelector(
    ({ user }) => user
  )
  const onLogout = () => {
    userLogout()
    !isAuth && navigate(LOGIN_ROUTE)
  }

  const getUsers = () => {
    try {
      if (allUsers.length === 0) {
        fetchUsers()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>
        {isAuth
          ? `Пользователь ${userData.email} авторизован`
          : 'Авторизуйтесь'}
      </h1>

      <h1>
        {userData.isActivated
          ? `Твой аккаунт активирован`
          : 'Активируй аккаунт'}
      </h1>

      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <Button onClick={getUsers} type="primary" style={{ marginRight: 20 }}>
          Cписок пользователей
        </Button>
        <Button onClick={onLogout} type="default">
          Выйти
        </Button>
      </div>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        allUsers &&
        allUsers.map(({ _id, email }) => {
          return <div key={_id}>{email}</div>
        })
      )}
      {error && <h2>{error}</h2>}
    </div>
  )
}

export default Profile
