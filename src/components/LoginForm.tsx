import { FC, ChangeEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'

const LoginForm: FC = () => {
  const { userLogin, userRegister } = useActions()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSetEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)
  const onSetPassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)

  const onLogin = () => userLogin(email, password)
  const onRegister = () => userRegister(email, password)

  return (
    <div className="login">
      <input
        className="login__input"
        value={email}
        onChange={onSetEmail}
        type="email"
        placeholder="Email"
      />
      <input
        className="login__input"
        value={password}
        onChange={onSetPassword}
        type="password"
        placeholder="Password"
      />
      <button
        disabled={!email || !password}
        className="login__btn"
        onClick={onLogin}
      >
        Войти
      </button>
      <button className="login__btn" onClick={onRegister}>
        Зарегистрироваться
      </button>
    </div>
  )
}

export default LoginForm
