import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: FC = () => {
  const {fetchUsers} = useActions()
  const { error, loading, allUsers } = useTypedSelector((state) => state.user)

  console.log(allUsers)

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {allUsers.map(({id, email}) => (
          <li key={id}>{email}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList